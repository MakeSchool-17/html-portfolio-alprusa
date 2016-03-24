$( document ).ready(function() {
    var gallery = $('#gallery').justifiedGallery({
        rowHeight : 200,
        lastRow : 'justify',
        margins : 3,
        randomize : true //remove this later as random doesn't quite work for a portolio
    });

    gallery.on('jg.complete', function() {
        $('#gallery a').swipebox({hideBarsDelay : false})
    });
});