let jsonDB = {
  projects: [
    {
      type: "projects",
      id: "gb-landscape-design",
      title: "GB Landscape Design",
      client: "GB Landscape Design",
      website: ["http://gb-landscape-design.netlify.com/"],
      github: ["https://github.com/venusang/gb-landscapes"],
      services: ["Web Development", "Web Design"],
      thumbnail: "gb-landscape-logo.png",
      screenshots: ["gb-landscape/gb-landscape-01.png"],
      previous: "cantinas-ranch",
      next: "corespring"
    }
  ]
};

// let jsonDB = {
//   projects: [
//     {
//       type: "projects",
//       id: "frontier-park",
//       img1920x1080: "1920x1080-frontier-park.jpg",
//       img200x200: "200x200-frontier-park.jpg",
//       img426x574: "426x574-frontier-park.jpg",
//       category: "municipalities",
//       title: "Frontier Park",
//       description: "Park design and beautification",
//       location: "Tustin, CA"
//     },
//     {
//       type: "projects",
//       id: "deputy-ken-collier-park",
//       img1920x1080: "1920x1080-deputy-ken-collier-park.jpg",
//       img200x200: "200x200-deputy-ken-collier-park.jpg",
//       img426x574: "426x574-deputy-ken-collier-park.jpg",
//       img426x574x01: "426x574-deputy-ken-collier-park-02.jpg",
//       img426x574x02: "426x574-deputy-ken-collier-park-02.jpg",
//       category: "municipalities",
//       title: "Deputy Ken Collier Park",
//       description: "Park design and beautification",
//       location: "Santee, CA"
//     },
//     {
//       type: "projects",
//       id: "hidden-hills-residence",
//       img1920x1080: "1920x1080-hidden-hills.jpg",
//       img200x200: "200x200-hidden-hills.jpg",
//       img426x574: "426x574-hidden-hills.jpg",
//       img426x574x01: "426x574-hidden-hills-front-01.png",
//       img426x574x02: "426x574-hidden-hills-front-02.png",
//       category: "residential",
//       title: "Hidden Hills Residence",
//       description: "Residential design and beautification",
//       location: "Hidden Hills, CA"
//     },
//     {
//       type: "projects",
//       id: "beverly-hills-residence",
//       img1920x1080: "1920x1080-beverly-hills-trees.jpg",
//       img200x200: "200x200-beverly-hills.jpg",
//       img426x574: "426x574-beverly-hills.jpg",
//       img426x574x01: "426x574-beverly-hills-before.jpg",
//       img426x574x02: "426x574-beverly-hills-after.jpg",
//       category: "residential",
//       title: "Beverly Hills Residence",
//       description: "A residential project in Beverly Hills, CA",
//       location: "Beverly Hills, CA"
//     },
//     {
//       type: "projects",
//       id: "whittier-residence",
//       img1920x1080: "1920x1080-whittier.jpg",
//       img200x200: "200x200-whittier.jpg",
//       img426x574: "426x574-whittier.jpg",
//       category: "residential",
//       title: "Whittier Residence",
//       description: "A residential project in Whittier, CA",
//       location: "Whittier, CA"
//     },
//     {
//       type: "projects",
//       id: "heidman-elementary-school",
//       img1920x1080: "1920x1080-heidman-es.jpg",
//       img200x200: "200x200-heidman.jpg",
//       img426x574: "426x574-heidman.jpg",
//       category: "commercial",
//       title: "Heidman Elementary School",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipil pcing elit. Proin nunc leo, rhoncus sit amet tolil arcu vel, pharetra volutpat sem lorn Donec tincidunt velit nec laoreet semper...",
//       location: "Tustin, CA"
//     },
//     {
//       type: "projects",
//       id: "tseng-residence",
//       img1920x1080: "1920x1080-tseng.jpg",
//       img200x200: "200x200-tseng.jpg",
//       img426x574: "426x574-tseng.jpg",
//       img426x574x01: "426x574-tseng-before.jpg",
//       img426x574x02: "426x574-tseng-after.jpg",
//       category: "residential",
//       title: "Tseng Residence",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipil pcing elit. Proin nunc leo, rhoncus sit amet tolil arcu vel, pharetra volutpat sem lorn Donec tincidunt velit nec laoreet semper...",
//       location: "Some City, CA"
//     },
//     {
//       type: "projects",
//       id: "mccadden-apartments",
//       img1920x1080: "1920x1080-mccadden.jpg",
//       img200x200: "200x200-mccadden.jpg",
//       img426x574: "426x574-mccadden.jpg",
//       img426x574x01: "426x574-mccadden-01.jpg",
//       img426x574x02: "426x574-mccadden-02.jpg",
//       category: "residential",
//       title: "McCadden Apartments",
//       description: "Concrete paver and irrigation install",
//       location: "Hollywood, CA"
//     }
//   ]
// };

export default function(server) {
  jsonDB.projects.forEach(project => {
    server.create("project", project);
  });
}
