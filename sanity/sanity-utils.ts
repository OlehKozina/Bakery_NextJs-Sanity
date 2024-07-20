import { Baker } from "@/types/Baker";
import { createClient, groq } from "next-sanity";
// import clientConfig from "./config/client-config";
import { Format } from "@/types/Format";

export async function getBakers(): Promise<[Baker]> {
  const baker = createClient({
    projectId: "fqinbqr2",
    dataset: "production",
    apiVersion: "2024-07-17",
  });

  return baker.fetch(
    groq`*[_type == "baker"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
    }`
  );
}

export async function getBaker(slug: string): Promise<Baker> {
  const client = createClient({
    projectId: "fqinbqr2",
    dataset: "production",
    apiVersion: "2024-07-17",
  });

  return client.fetch(
    groq`*[_type == "baker" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
    }`,
    { slug: slug }
  );
}

export async function getFormats(): Promise<[Format]> {
  const baker = createClient({
    projectId: "fqinbqr2",
    dataset: "production",
    apiVersion: "2024-07-17",
  });

  return baker.fetch(
    groq`*[_type == "format"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
    }`
  );
}

export async function getFormat(slug: string): Promise<Format> {
  const client = createClient({
    projectId: "fqinbqr2",
    dataset: "production",
    apiVersion: "2024-07-17",
  });

  return client.fetch(
    groq`*[_type == "format" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
    }`,
    { slug: slug }
  );
}
