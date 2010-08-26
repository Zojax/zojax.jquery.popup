String.prototype.startsWith = function(str)
{return (this.match("^"+str)==str)};

jQuery.fn.urlize = function( base ) {
    if (!base)
        base = '';
    return this.each(function() {
        var $this = $(this);
        
        function make(i, $this) {
            var $this = $($this);
            var x = $this.html();
            if (!x)
                x = $this.text();
            list = x.match( /\b(http:\/\/|www\.|http:\/\/www\.)[^ \<]{2,}\b/g );
            if ( list ) {
                for ( i = 0; i < list.length; i++ ) {
                    lnk = list[i]
                    if (lnk.startsWith('www.'))
                        lnk = 'http://' +list[i];
                    x = x.replace( list[i], "<a target='_blank' href='" + (base ? base + escape( lnk ): lnk) + "'>"+ list[i] + "</a>" );
                }
                $this.html(x)
            }
        };
        
        make(0, $this);
        $this.contents().not('a').each(make);
    })
};
