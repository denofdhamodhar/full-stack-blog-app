import { useEffect, useState } from "react"
import PostForm from "../components/post-form/PostForm"
import { useNavigate, useParams } from "react-router-dom"
import Services from "../appwrite/config"

function EditPost() {
  const [Post, SetPost] = useState(null)
  const {slug} = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchPost() {
      await Services.getPost(slug).then((result) => {
        if (result) {
          SetPost(result)
        }
      })
    }
    fetchPost()
  }, [slug, navigate])

  return (
    <>
      <PostForm post={Post} />
    </>
  )
}

export default EditPost