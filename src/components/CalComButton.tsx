"use client"
  
  import { getCalApi } from "@calcom/embed-react";
  import { useEffect } from "react";
import { Button } from "./Button";
import Link from "next/link";

type ButtonProps = {
    invert?: boolean
    dataCalNamespace?: string
    dataCalLink: string
    dataCalConfig?: string

  } & (
    | React.ComponentPropsWithoutRef<typeof Link>
    | (React.ComponentPropsWithoutRef<'button'> & { href?: undefined })
  ) 
  
  export default function CalComButton({
    invert = false,
    children,
    title,
    dataCalNamespace='',
    dataCalLink,
    dataCalConfig=JSON.stringify({layout: "column_view"}),
    ...props
  }: ButtonProps) {
	useEffect(()=>{
	  (async function () {
		const cal = await getCalApi();
        const config = {
            styles:{branding:{brandColor:"#6366f1"}},hideEventTypeDetails:false, ...JSON.parse(dataCalConfig)
        };
		cal("ui", config as any);
	  })();
	}, [])
	return <Button 
      data-cal-namespace={dataCalNamespace}
	  data-cal-link={dataCalLink}
	  data-cal-config={dataCalConfig}
      {...props}
	  >{title}</Button>;
  };
  