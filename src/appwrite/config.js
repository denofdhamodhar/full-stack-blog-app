import { Client, Databases, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

export class services {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client.setEndpoint(conf.ENDPOINT_URL).setProject(conf.PROJECT_ID);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({
    title,
    slug,
    content,
    status,
    featuredImage,
    userId,
    authour,
  }) {
    try {
      const result = await this.databases.createDocument({
        databaseId: conf.DATABASE_ID,
        collectionId: conf.COLLECTION_ID,
        documentId: slug,
        data: {
          title: title,
          content: content,
          featuredImage: featuredImage,
          status: status,
          userId: userId,
          authour: authour,
        },
      });
      return result;
    } catch (error) {
      console.log("Appwrite :: createPost Error ::", error.message);
    }
  }

  async getPost(slug) {
    try {
      const result = await this.databases.getDocument({
        databaseId: conf.DATABASE_ID,
        collectionId: conf.COLLECTION_ID,
        documentId: slug,
      });
      return result;
    } catch (error) {
      console.log("Appwrite :: getPost Error ::", error.message);
    }
  }

  async getAllPosts(queries = [Query.equal("status", "active")]) {
    try {
      const result = await this.databases.listDocuments({
        databaseId: conf.DATABASE_ID,
        collectionId: conf.COLLECTION_ID,
        queries: queries,
      });
      return result;
    } catch (error) {
      console.log("Appwrite :: getAllPosts Error ::", error.message);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      const result = await this.databases.updateDocument({
        databaseId: conf.DATABASE_ID,
        collectionId: conf.COLLECTION_ID,
        documentId: slug,
        data: {
          title: title,
          content: content,
          featuredImage: featuredImage,
          status: status,
        },
      });
      return result;
    } catch (error) {
      console.log("Appwrite :: updatePost Error ::", error.message);
    }
  }

  async deletePost(slug) {
    try {
      const result = await this.databases.deleteDocument({
        databaseId: conf.DATABASE_ID,
        collectionId: conf.COLLECTION_ID,
        documentId: slug,
      });
      return result;
    } catch (error) {
      console.log("Appwrite :: deletePost Error ::", error.message);
      throw error;
    }
  }

  // --------------- Storage appwrite setup ----------------------------------------------

  async uploadFile(file) {
    try {
      const result = await this.storage.createFile({
        bucketId: conf.BUCKET_ID,
        fileId: ID.unique(),
        file: file,
      });
      return result;
    } catch (error) {
      console.log("Appwrite :: uploadFile Error ::", error.message);
    }
  }

  getFile(fileId) {
    try {
      const result = this.storage.getFileView({
        bucketId: conf.BUCKET_ID,
        fileId: fileId,
      });
      return result;
    } catch (error) {
      console.log("Appwrite :: getFile Error ::", error.message);
    }
  }

  async deleteFile(fileId) {
    try {
      const result = await this.storage.deleteFile({
        bucketId: conf.BUCKET_ID,
        fileId: fileId,
      });
      return result;
    } catch (error) {
      console.log("Appwrite :: deleteFile Error ::", error.message);
      throw error;
    }
  }
}

const Services = new services();
export default Services;
