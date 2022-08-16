import  SanityClient  from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";

export const client = SanityClient({
    projectId:'f8kt58jp',
    dataset:'production',
    apiVersion:"2022-02-03",
    useCdn:true,
    token:'skFEXaPO6MJS97XS4je1ZpNacqf5oHBcKlg6FModtXrWzFFeemsb59PQdjmemQ5CZJGkmqK6NgpnmOA0qTSr3o5xKfU5TbYsAIBLfB5N0XFHaFPMYccQGmtwBIdNDnqE8065SlgX5jaGJnSZzfLp6GrjZglA4KnYRUIqIJzXI87Gx4BIqcKS'
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);