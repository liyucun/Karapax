/**
 * Created by Mia on 2015-05-21.
 */
// Find apts with filters, show apts' list

/**
 * show the initial list of apts and the pager
 */
$(window).onload(findWithFilters(1));

/**
 * find apts infomation from database with conditions
 * @param page the index of page need to be shown
 */
function findWithFilters(page){
    // Get filters
    var queryURL = '?';
    //Get date filter
    if($('#date').val()!='') {
        queryURL += 'filterDate='+$('#date').val();
    }

    //Get price filter
    if($('#price1').val()!=''){
        if(queryURL!='?')
            queryURL += '&filterPrice1='+$('#price1').val();
        else
            queryURL += 'filterPrice1='+$('#price1').val();
    }
    if($('#price2').val()!=''){
        if(queryURL!='?')
            queryURL += '&filterPrice2='+$('#price2').val();
        else
            queryURL += 'filterPrice2='+$('#price2').val();
    }

    //Get area filter
    /**
     * DownTown, CDN, NDG, Monk, French
     */
    var area = '';

    if($('#area-dt:checked').length==1){
        if(area!='') area += "+市中心";
        else area = '市中心';
    }
    if($('#area-cdn:checked').length==1){
        if(area!='') area += "+CDN";
        else area = 'CDN';
    }
    if($('#area-ndg:checked').length==1){
        if(area!='') area += "+NDG";
        else area = 'NDG';
    }
    if($('#area-monk:checked').length==1){
        if(area!='') area += "+Monk";
        else area = 'Monk';
    }
    if($('#area-french:checked').length==1){
        if(area!='') area += "+French";
        else area = 'French';
    }
    if(area!=''){
        if(queryURL!='?') queryURL += '&filterArea='+ area;
        else queryURL += 'filterArea='+ area;
    }

    //Get type filter
    /**
     * aptType  1: Studio; 2: 2 1/2; 3: 3 1/2; 4: 4 1/2; 5: 5 1/2;
     * rentType  1: entire; 2: private; 3: living
     */
    var aptType = '';

    if($('#type-1:checked').length==1){
        if(aptType!='') aptType += "+1";
        else aptType = '1';
    }
    if($('#type-2:checked').length==1){
        if(aptType!='') aptType += "+2";
        else aptType = '2';
    }
    if($('#type-3:checked').length==1){
        if(aptType!='') aptType += "+3";
        else aptType = '3';
    }
    if($('#type-4:checked').length==1){
        if(aptType!='') aptType += "+4";
        else aptType = '4';
    }
    if($('#type-5:checked').length==1){
        if(aptType!='') aptType += "+5";
        else aptType = '5';
    }

    var rentType = '';
    if($('#type-entire:checked').length==1){
        if(rentType!='') rentType += "+1";
        else rentType = '1';
    }
    if($('#type-private:checked').length==1){
        if(rentType!='') rentType += "+2";
        else rentType = '2';
    }
    if($('#type-living:checked').length==1){
        if(rentType!='') rentType += "+3";
        else rentType = '3';
    }
    if(aptType!=''){
        if(queryURL!='?') queryURL += '&filterType[aptType]='+ aptType;
        else queryURL += 'filterType[aptType]='+ aptType;
    }
    if(rentType!=''){
        if(queryURL!='?') queryURL += '&filterType[rentType]='+ rentType;
        else queryURL += 'filterType[rentType]='+ rentType;
    }

    //Get sort filter
    /**
     * priceLow: Price Low to High;
     * priceHigh: Price High to Low;
     * viewer: Viewer
     */
    var sort = 'priceLow';

    if($('#sort-pl:checked').length==1){
        sort = 'priceLow';
    }
    if($('#sort-ph:checked').length==1){
        sort = 'priceHigh';
    }
    if($('#sort-v:checked').length==1){
        sort = 'viewer';
    }
    if(queryURL!='?') queryURL += '&filterSort='+ sort;
    else queryURL += 'filterSort='+ sort;

    //Get page
    queryURL += '&page='+page;
    populateApt(queryURL,page);
}

/**
 * Sent request, and get JSON
 * @param queryURL Request URL
 * @param page Page index
 */
function populateApt(queryURL,page) {

    // jQuery AJAX call for JSON
    $.getJSON( '/aptlist'+queryURL, function(data) {
        showInPage(data,page);
    });
};

/**
 * show apt info in pages
 * @param data The results get from web service, apts information
 * @param page The page index
 */
function showInPage(data,page){
    var aptNumInPage = 1;
    var pageNum;
    if(data.length%aptNumInPage==0) pageNum = data.length/aptNumInPage;
    else pageNum = parseInt(data.length/aptNumInPage)+1;

    //start index (included)
    var startApt = aptNumInPage*(page-1);
    //end index (not included)
    var stopApt = startApt+aptNumInPage;
    if(stopApt>data.length) stopApt = data.length;

    var imgContent = '<div class="hide" id="aptData">'+data+'</div>';
    //Show apt list in requested page
    for(i=startApt;i<stopApt;i++){
        imgContent += '<div class="col-md-4 col-sm-6 col-xs-12">' +
        '<div class="apt-image">' +
        '<a href="./listing?id='+ data[i]._id +'">' +
        '<img src="images/'+ data[i].imgPath[0] +'" alt="" class="img-responsive image-height">' +
        '<div class="price-image">' +
        '<span class="h6 price-span-top">$</span>' +
        '<span class="h4">'+ data[i].price.eight +'</span>' +
        '<span class="h6 price-span-top">CAD</span>' +
        '</div>' +
        '</a>' +
        '</div>' +
        '</div>';
    }
    $('#apartments .container .row.text-center.row-space').html(imgContent);

    var pager = '';

    if(data.length==0) $('#apartments .container .row.text-center.row-space').html('<div>Sorry, There is no apartment satisfied the condition. Please choose other filters.</div>');
    //pager
    else {
        if (page != 1) pager += '<li><a onclick="findWithFilters(' + (page - 1) + ')" href="#">Previous</a></li>';
        for (i = 1; i <= pageNum; i++) {
            if (i != page)
                pager += '<li><a onclick="findWithFilters(' + i + ')" href="#">' + i + '</a></li>';
            else
                pager += '<li><a id="pager-active">' + i + '</a></li>';
        }
        if (page != pageNum) pager += '<li><a onclick="findWithFilters(' + (page + 1) + ')" href="#">Next</a></li>';
    }
    $('ul.pager').html(pager);

}

