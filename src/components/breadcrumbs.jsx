import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Route2LabelMap = {
  '/': 'Главная',
  '/projects': 'Проекты',
  "/profile/[username]/barrels": "Your Barrels",
  "/barrels": "Barrel List",
  "/barrels/[barrel_id]": "Barrel",
  "/barrels/[barrel_id]/settings": "Settings",
};

export const Breadcrumbs = () => {

  const router = useRouter()
  const [ crumbs, setCrumbs ] = useState([])
  const routerMap = {
    admin: 'Главная',
    projects: 'Проекты',
  }
  const setCrumbs2 = () => {
    const segments = router.pathname.split('/')
    const crumbs = []
    segments.map(e => {
      if(e) {
        let route = e
        if(e.indexOf('[') === 0) {
          route = router.query[route.replace(/[\[\]']+/g, '')]
          crumbs.splice(crumbs.length - 1, 1)
        } else {
          route = routerMap[route]
        }
        crumbs.push({
          route: route
        })
      }
    })


    console.log(crumbs, router)
  }

  useEffect(() => {
    router.isReady && setCrumbs2()
    const segmentsPath = router.asPath.split("/");
    const segmentsRoute = router.route.split("/");
    const crumbLinks = CombineAccumulatively(segmentsPath);
    const crumbLabels = CombineAccumulatively(segmentsRoute);

    const crumbs = crumbLinks.map((link, index) => {
      const route = crumbLabels[index];
      const crumb = {
        link: link,
        route: route,
        label: Route2LabelMap[route] || route,
      };
      return crumb;
    });
    setCrumbs(crumbs);
    
    console.log({
      router,
      segmentsPath,
      segmentsRoute,
      crumbLinks,
      crumbLabels,
      crumbs,
    });
  }, [ router.isReady ])

  return (
    <ul className="breads">
    {crumbs.map((c, i) => {
      return (
        <li key={ i }>
          {
            crumbs.length - 1 > i 
            &&
            <Link href={ c.link }>Главная</Link> 
            || 
            <span>Проекты</span>
          }
        </li>
      )
    })}
    </ul>
  )
}

function CombineAccumulatively(segments) {
  /* 
  when segments = ['1','2','3']
  returns ['1','1/2','1/2/3']
  */
  const links = segments.reduce((acc, cur, curIndex) => {
    const last = curIndex > 1 ? acc[curIndex - 1] : "";
    const newPath = last + "/" + cur;
    acc.push(newPath);
    return acc;
  }, []);
  return links;
}