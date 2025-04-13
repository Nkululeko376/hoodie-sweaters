//========Saving the html data to javascript==========//

const products = [
    {
        image: `products/adidas-mens-seasonal-essentials-us-sport-royal-blue-hoodie.png`,
        name: `Adidas Mens Seasonal Essentials US Sport Royal Blue Hoodie`,
        priceCents: 7111
    },
    {
        image: `products/archie-mens-paisley-embroidery-ecru-hoodie.png`,
        name: `Archive Men's Paisley Embroidery Ecru Hoodie`,
        priceCents: 4177
    },
    {
        image: `products/big-rvca-grey-crew-sweater.png`,
        name: `Men's Big RVCA Grey Crew Sweater`,
        priceCents: 4177
    },
    {
        image: `products/black-zee-rose-hoodie.png`,
        name: `The FIX Men's Black Zee Nxumalo Rose Hoodie`,
        priceCents: 2089
    },
    {
        image: `products/converse-unisex-goto-gold-starndard-natural-hoodie.png`,
        name: `Converse Unisex Go-To Gold Standard Natural Hoodie`,
        priceCents: 13055
    },
    {
        image: `products/cotton-ongrey.webp`,
        name: `Men's Cotton On Grey Box Fit Crew Sweater`,
        priceCents: 2345
    },
    {
        image: `products/exact-mens-blue-back-graphic-print-hoodie.png`,
        name: `Exact Men's Blue Back Graphic Print Hoodie`,
        priceCents: 1305
    },
    {
        image: `products/fix-mens-natural-puff-print-hoodie.png`,
        name: `The FIX Men's Natural Puff Print Hoodie`,
        priceCents: 1984
    },
    {
        image: `products/g-star-corehooded.png`,
        name: `G-Star Men's Premium Core Hooded Brown Sweater`,
        priceCents: 10439
    },
    {
        image: `products/gstar-circle-looper-cream-sweater.webp`,
        name: `G-Star Men's Circle G-Star Looper Cream Sweatshirt`,
        priceCents: 10439
    },
    {
        image: `products/gstar-detailed-knitted-ecru-sweater.png`,
        name: `G-Star Men's Detailed Knitted Ecru Sweater`,
        priceCents: 12005
    },
    {
        image: `products/gstar-hooded-blue-zip-sweater.png`,
        name: `G-Star Men's Premium Core Hooded Blue Zip Sweater`,
        priceCents: 11483
    },
    {
        image: `products/gstar-mens-constructed-motion-tech-black-sweateshirt.webp`,
        name: `G-Star Men's Constructed Motion Tech Black Sweatshirt`,
        priceCents: 10439
    },
    {
        image: `products/gstar-mens-premium-core-hooded-graphite-sweater.png`,
        name: `G-Star Men's Premium Core Hooded Graphite Sweater`,
        priceCents: 10439
    },
    {
        image: `products/guess-fullzip-sweatshirt.webp`,
        name: `Men's Guess Sand Mickey Full Zip Sweatshirt`,
        priceCents: 9603
    },
    {
        image: `products/mens-adidas-black-sweater.png`,
        name: `Mens adidas Black Sweater`,
        priceCents: 4700
    },
    {
        image: `products/mens-apx-essential-lilac-hoodie.png`,
        name: `Mens APX Essential Lilac Hoodie`,
        priceCents: 1827
    },
    {
        image: `products/mens-apx-nylon-green-sweater.png`,
        name: `Mens APX Nylon Green Sweater`,
        priceCents: 2350
    },
    {
        image: `products/mens-apx-nylon-navy-sweater.png`,
        name: `Mens APX Nylon Navy Sweater`,
        priceCents: 2350
    },
    {
        image: `products/mens-cotton-on-green-box-fit-hoodie.png`,
        name: `Men's Cotton On Green Box Fit Hoodie`,
        priceCents: 3128
    },
    {
        image: `products/mens-markham-basic-black-hoodie.png`,
        name: `Men's Markham Basic Black Hoodie`,
        priceCents: 2084
    },
    {
        image: `products/mens-cotton-on-pink-box-fit-hoodie.png`,
        name: `Men's Cotton On Pink Box Fit Hoodie`,
        priceCents: 3128
    },
    {
        image: `products/mens-superdry-stone-embroidered-script-graphic-hoodie.png`,
        name: `Men's Superdry Stone Embroidered Script Graphic Hood`,
        priceCents: 9917
    },
    {
        image: `products/nike-mens-nsw-club-fleece-blue-hoodie.png`,
        name: `Nike Men's Nsw Club Fleece Blue Hoodie`,
        priceCents: 7311
    },
    {
        image: `products/nike-mens-team-31-club-nba-blue-hoodie.png`,
        name: `Nike Men's Team 31 Club NBA Blue Hoodie`,
        priceCents: 8355
    },
    {
        image: `products/nike-nsw-club-beige-hoodie.png`,
        name: `Nike Men's Nsw Club Beige Hoodie`,
        priceCents: 7311
    },
    {
        image: `products/nike-purple-zip.png`,
        name: `Nike Men's Tech Windrunner Purple Full-Zip Hoodie`,
        priceCents: 12533
    },
    {
        image: `products/north-face-mens-dome-green-hoodie.png`,
        name: `The North Face Men's Simple Dome Green Hoodie`,
        priceCents: 5222
    },
    {
        image: `products/north-face-mens-simple-dome-black-hoodie.png`,
        name: `The North Face Men's Simple Dome Black Hoodie`,
        priceCents: 4822
    },
    {
        image: `products/puma-mens-essential-logo-lab-execution-black-hoodie.png`,
        name: `Puma Mens Essential Logo Lab Execution Black Hoodie`,
        priceCents: 5022
    },
    {
        image: `products/puma-mens-scuderia-ferrari-hp-race-big-shield.png`,
        name: `Puma Men's Scuderia Ferrari HP Race Big Shield Black Hoodie`,
        priceCents: 10444
    },
    {
        image: `products/puma-taupe-hoodie.png`,
        name: `Puma Mens Class Washed Totally Taupe Hoodie`,
        priceCents: 7311
    },
    {
        image: `products/puma-x-kidsuper-mens-stone-purple-progressive-hoodie.png`,
        name: `Puma x KidSuper Men's Stone/Purple Progressive Hoodie`,
        priceCents: 18277
    },
    {
        image: `products/quiksilver-blue-graphic-mix-crew-pullover-sweater.png`,
        name: `Men's Quiksilver Blue Graphic Mix Crew Pullover Sweater`,
        priceCents: 4177
    },
    {
        image: `products/redbat-classics-mens-light-brown-hoodie.png`,
        name: `Redbat Classics Men's Light Brown Hoodie`,
        priceCents: 1984
    },
    {
        image: `products/redbet-classics-mens-off-white-hoodie.png`,
        name: `Redbat Classics Men's Off White Hoodie`,
        priceCents: 1984
    },
    {
        image: `products/reebok-blue-hoodie.png`,
        name: `Reebok Men's Icon Elements Blue Hoodie`,
        priceCents: 6788
    },
    {
        image: `products/the-fix-mens-brown-check-golfer-sweat-top.png`,
        name: `The FIX Men's Brown Check Golfer Sweat top`,
        priceCents: 1567
    },
    {
        image: `products/the-fix-mens-pink-tatto-print-hoodie.png`,
        name: `The FIX Men's Pink Tattoo Print Hoodie`,
        priceCents: 1984
    },
    {
        image: `products/the-north-face-mens-mountain-cleanup-blue-oversized-hoodie.png`,
        name: `The North Face Men's Mountain Cleanup Blue Oversized Hoodie`,
        priceCents: 9399
    },
    {
        image: `products/ts-mens-charcoal-melange-hoodie.png`,
        name: `TS Mens Dri-Tech® Performance Charcoal Melange Hoodie`,
        priceCents: 1827
    },
    {
        image: `products/under-armour-mens-rival-fleece-ether-blue-hoodie.png`,
        name: `Under Armour Mens Rival Fleece Ether Blue Hoodie`,
        priceCents: 6788
    },
    {
        image: `products/vans-66-charcoal-hoodie.png`,
        name: `Vans Men's 66 Baked in Charcoal Loose Hoodie`,
        priceCents: 5744
    },
    {
        image: `products/vans-mens-tell-friend-cream-hoodie.png`,
        name: `Vans Men's Tell A Friend Cream Hoodie`,
        priceCents: 6788
    }
]