/**
 * Created by Mia on 2015-05-07.
 */
var aptSchema = {
    _id: 'dslkfjdsof',
    address: '400 Sherbrook',
    area: 'DownTown',
    price: {eight: 1700, twelve: 1650},
    avaDate: new Date('2015-9-1'),
    size: 100,
    bedrooms: 2,
    bathrooms: 1,
    description: 'This is a great apartment.',
    amenities: {net: 1},
    around: {bus:'124,165,166', metro:'green line', restaurant: 'a lot', bank: 'BMO, RBC, TD', entertainment: 'no'},
    state: 1,
    hasFurniture: 1,
    furniture: 'Description of funitures',
    requirements: {pat: 0, smoke: 0},
    viewer: 1000,
    imgPath: 'images/181placedyouville300br1.jpg'
}

module.exports.model = aptSchema;