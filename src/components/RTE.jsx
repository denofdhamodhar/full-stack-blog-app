import { Editor } from "@tinymce/tinymce-react";
import { useId } from "react";
import { Controller } from "react-hook-form";
import { TinyMCE_KEY } from "../conf/conf";

function RTE({ name, control, label = "content :", defaultValues = "", postContent }) {
  const id = useId();
  return (
    <div className="w-full my-2">
      {label && (
        <label
          htmlFor={id}
          className="mb-2 inline-block font-medium font-paragraph"
        >
          {label}
        </label>
      )}
      <div className="border-2 border-amber-400 rounded-xl">
        <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Editor 
            apiKey={TinyMCE_KEY}
            value={value || ""}
            initialValue={ postContent ? postContent : defaultValues}
            onEditorChange={onChange}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "preview",
                "help",
                "wordcount",
              ],  
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        )}
      />
      </div>
    </div>
  );
}

export default RTE;
