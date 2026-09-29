import type { Metadata } from 'next';
import './globals.css';
import { siteUrl as origin } from '@/lib/site-url';
const title='Sankalp Vats — AI/ML & Software Developer';
const description='Sankalp Vats is an IIT (BHU) student and AI/ML & Software Developer building intelligent systems, full-stack applications and machine learning solutions.';
export const metadata: Metadata={metadataBase:new URL(origin),title,description,alternates:{canonical:'/'},openGraph:{title,description,type:'website',url:origin,siteName:'Sankalp Vats'},twitter:{card:'summary',title,description},icons:{icon:'/favicon.svg',shortcut:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'Person',name:'Sankalp Vats',url:origin,email:'sankalpv1904@gmail.com',sameAs:['https://github.com/sankalpvats','https://www.linkedin.com/in/sankalp-vats-82432a321/'],affiliation:{'@type':'EducationalOrganization',name:'Indian Institute of Technology (BHU), Varanasi'},description})}}/></body></html>}
