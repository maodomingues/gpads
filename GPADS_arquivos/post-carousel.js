var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

( function( $ ) {

	$ = jQuery;

	UAGBPostCarousel = {

		_setHeight: function( scope ) {
			var post_wrapper = scope.find(".slick-slide"),
				post_active = scope.find(".slick-slide.slick-active"),
				max_height = -1,
				wrapper_height = -1,
				post_active_height = -1,
				is_background_enabled = scope.parents(".uagb-post-grid").hasClass("uagb-post__image-position-background")

			post_active.each( function( i ) {
				var this_height = $( this ).outerHeight(),
					blog_post = $( this ).find( ".uagb-post__inner-wrap" ),
					blog_post_height = blog_post.outerHeight(),
					post_img_ht = $( this ).find( ".uagb-post__image" ).outerHeight(),
					post_text_ht = $( this ).find( ".uagb-post__text" ).outerHeight()

				if( is_background_enabled ){
					blog_post_height =  post_text_ht
				}else{
					blog_post_height = post_img_ht+ post_text_ht
				}

				if( max_height < blog_post_height ) {
					max_height = blog_post_height
					post_active_height = max_height + 15
				}

				if ( wrapper_height < this_height ) {
					wrapper_height = this_height
				}
			})

			post_active.each( function( i ) {
				var selector = $( this ).find( ".uagb-post__inner-wrap" )
				selector.animate({ height: max_height }, { duration: 200, easing: "linear" })
			})

			scope.find(".slick-list").animate({ height: post_active_height }, { duration: 200, easing: "linear" })

			max_height = -1
			wrapper_height = -1

			post_wrapper.each(function() {

				var $this = jQuery( this ),
					selector = $this.find( ".uagb-post__inner-wrap" ),
					blog_post_height = selector.outerHeight()

				if ( $this.hasClass("slick-active") ) {
					return true
				}

				selector.css( "height", blog_post_height )
			})

		},
		_unSetHeight:function( scope ) {
			var post_wrapper = scope.find(".slick-slide"),
				post_active = scope.find(".slick-active")

			post_active.each( function( i ) {
				var selector = $( this ).find( ".uagb-post__inner-wrap" )
				selector.css( "height", "auto" )
			})

			post_wrapper.each(function() {
				var $this = jQuery( this ),
					selector = $this.find( ".uagb-post__inner-wrap" )
				if ( $this.hasClass("slick-active") ) {
					return true
				}
				selector.css( "height", "auto" )
			})

		},
	}

} )( jQuery )

// Set Carousel Height for Customiser.
function uagb_carousel_height(  id ) {
	var wrap            = jQuery("#block-"+id)
	var scope = wrap.find(".wp-block-uagb-post-carousel").find( ".is-carousel" )
	UAGBPostCarousel._setHeight( scope )
}

// Unset Carousel Height for Customiser.
function uagb_carousel_unset_height(  id ) {
	var wrap            = jQuery("#block-"+id)
	var scope = wrap.find(".wp-block-uagb-post-carousel").find( ".is-carousel" )
	UAGBPostCarousel._unSetHeight( scope )
}

}
/*
     FILE ARCHIVED ON 15:18:23 Apr 18, 2022 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 22:18:24 Aug 01, 2023.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 209.045
  exclusion.robots: 0.083
  exclusion.robots.policy: 0.073
  cdx.remote: 0.053
  esindex: 0.009
  LoadShardBlock: 177.611 (3)
  PetaboxLoader3.datanode: 170.714 (4)
  PetaboxLoader3.resolve: 84.19 (2)
  load_resource: 134.633
*/