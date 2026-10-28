import type { MetadataRoute } from "next";
const routes=["","/about","/services","/portfolio","/courses","/team","/partners","/blog","/contact"];
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.NEXT_PUBLIC_SITE_URL||"https://example.com";return routes.map(route=>({url:`${base}${route}`,lastModified:new Date(),changeFrequency:route==="/blog"?"weekly":"monthly",priority:route===""?1:0.7}));}
