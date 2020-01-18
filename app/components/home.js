import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
    model() {
        return {
            slides: [
                {
                    imgSrc: '1920x1080-tseng.jpg',
                    category: 'residential',
                    title: 'Tseng Residence',
                    location: 'City, CA'

                },
                {
                    imgSrc: '1920x1080-deputy-ken-collier-park.jpg',
                    category: 'municipalities',
                    title: 'Deputy Ken Collier Park',
                    location: 'Santee, CA'
                },
                {
                    imgSrc: '1920x1080-frontier-park.jpg',
                    category: 'municipalities',
                    title: 'Frontier Park',
                    location: 'Cerritos, CA'
                },
                {
                    imgSrc: '1920x1080-heidman-es.jpg',
                    category: 'commercial',
                    title: 'Heidman Elementary School',
                    location: 'Tustin, CA'
                }
            ],
            projects: [
                {
                    imgSrc: '426x574-beverly-hills.jpg',
                    category: 'residential',
                    title: 'Beverly Hills Residence',
                    description: 'A residential project in Beverly Hills, CA'
                },
                {
                    imgSrc: '426x574-whittier.jpg',
                    category: 'residential',
                    title: 'Whittier Residence',
                    description: 'A residential project in Whittier, CA'
                },
                {
                    imgSrc: '426x574-heidman.jpg',
                    category: 'commercial',
                    title: 'Heidman Elementary School',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipil pcing elit. Proin nunc leo, rhoncus sit amet tolil arcu vel, pharetra volutpat sem lorn Donec tincidunt velit nec laoreet semper...'
                },
                {
                    imgSrc: '426x574-tseng.jpg',
                    category: 'residential',
                    title: 'Tseng Residence',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipil pcing elit. Proin nunc leo, rhoncus sit amet tolil arcu vel, pharetra volutpat sem lorn Donec tincidunt velit nec laoreet semper...'
                },
                {
                    imgSrc: '426x574-mccadden.jpg',
                    category: 'residential',
                    title: 'McCadden Apartments',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipil pcing elit. Proin nunc leo, rhoncus sit amet tolil arcu vel, pharetra volutpat sem lorn Donec tincidunt velit nec laoreet semper...'
                }
            ]
        }
    }
}

