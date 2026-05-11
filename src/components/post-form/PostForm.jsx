import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Services from "../../appwrite/config";
import Container from "../../Layout/Container";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import RTE from "../RTE";
import Select from "../Select";
import Button from "../Button";

function PostForm({ post }) {
  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();
  const [closePreviewTab,setClosePreviewTab] = useState(true)
  const { register, handleSubmit, watch, setValue, getValues, control } =
    useForm({
      defaultValues: {
        authour : post?.authour || "",
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const slugTransformer = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }
  }, []);

  useEffect(() => {
    const { unsubscribe } = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransformer(value.title), {
          shouldValidate: true,
        });
      }
    });
    return () => unsubscribe();
  }, [setValue, slugTransformer, watch]);

  function ImageChange(e){
    const data = e.target.files[0]
    if (data) {
      setClosePreviewTab(false)
    }
  }

  async function submit(data) {
    if (post) {
      const file = data.image[0]
        ? await Services.uploadFile(data.image[0])
        : undefined;
      if (file) {
        await Services.deleteFile(post.featuredImage);
      }
      const dbPost = await Services.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : post.featuredImage,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = data.image[0]
        ? await Services.uploadFile(data.image[0])
        : undefined;
      data.featuredImage = file ? file.$id : null;
      const dbPost = await Services.createPost({
        ...data,
        userId: userData.$id,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    }
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(submit)}>
        <div className="w-full px-4 my-4 lg:my-8 max-w-lg lg:max-w-full mx-auto lg:px-6 grid grid-cols-1 lg:grid-cols-7 lg:gap-x-8">
        <div className="w-full col-span-1 lg:col-span-4">
          <Input
              label={"Title :"}
              value={post?.title}
            placeHolder={"Enter the title"}
            {...register("title", { required: true })}
          />
            {
              !post && (
                <Input
            onInput={(e) => {
              setValue("slug", slugTransformer(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
              label={"Slug :"}
            placeHolder={"Enter the slug"}
            {...register("slug" , {required : true})}
          />
              )
          }
            {
              !post && (
                <Input
              label={"Author :"}
              placeHolder={"Enter the authour"}
              {...register("authour", { required: true })}
            />
              )
            }
          <RTE postContent={post?.content || ""} name={"content"} control={control} label="Content :" defaultValues={getValues("content")} />
        </div>
        <div className="w-full col-span-1 lg:col-span-3">
          <Input
              onInput={(e) => {
                ImageChange(e)
            }}
            label="Upload cover photo :"
            type="file"
            className="file:rounded-full file:bg-amber-500 file:text-white file:px-2 file:py-1"
            accept="image/png, image/jpeg, image/jpg"
            {...register("image", {required : true})}
            />
            {
              closePreviewTab && post && (
                <div>
              <img src={Services.getFile(post?.featuredImage)} alt={post?.title} />
            </div>
              )
            }
          <Select
            label="Status :"
            options={["active", "Inactive"]}
            {...register("status", {required : true})}
          />
          <Button type="submit" label={ post ? "Update" : "Create"} className="my-2 lg:mt-4" bgColor={post ? "bg-slate-800" : "bg-green-500"} />
        </div>
      </div>
      </form>
    </Container>
  );
}

export default PostForm;
