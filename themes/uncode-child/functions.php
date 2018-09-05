<?php
add_action('after_setup_theme', 'uncode_language_setup');
function uncode_language_setup()
{
	load_child_theme_textdomain('uncode', get_stylesheet_directory() . '/languages');
}

function theme_enqueue_styles()
{
	$production_mode = ot_get_option('_uncode_production');
	$resources_version = ($production_mode === 'on') ? null : rand();
	$parent_style = 'uncode-style';
	$child_style = array('uncode-custom-style');
	wp_enqueue_style($parent_style, get_template_directory_uri() . '/library/css/style.css', array(), $resources_version);
	wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', $child_style, $resources_version);
}
add_action('wp_enqueue_scripts', 'theme_enqueue_styles');

function wpb_floats_bar() {
    /*footer bar*/
    wp_enqueue_script( 'wpb-footerbar', get_stylesheet_directory_uri() . '/js/floatingbar.js', array( 'jquery' ) );
    /*top bar*/
    wp_enqueue_script( 'wpb-topbar', get_stylesheet_directory_uri() . '/js/floatingbar2.js', array( 'jquery' ) );
    /*principal bar*/
    wp_enqueue_script( 'wpb-principalbar', get_stylesheet_directory_uri() . '/js/principalbar.js', array( 'jquery' ) );
}
add_action( 'wp_enqueue_scripts', 'wpb_floats_bar' );
/*end footer bar*/

/* Remove product meta */
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );


// add_action( 'after_setup_theme', 'wpdocs_theme_setup' );
// function wpdocs_theme_setup() {
//     add_image_size( 'woocommerce_get_image_size_gallery_thumbnail', 200,200,false ); // 300 pixels wide (and unlimited height)
// }
add_filter( 'woocommerce_get_image_size_gallery_thumbnail', function( $size ) {
    return array(
        'width'  => 300,
        'height' => 300,
        'crop'   => 0,
    );
} );

add_action( 'after_setup_theme', 'yourtheme_setup' );

function yourtheme_setup() {
    add_theme_support( 'wc-product-gallery-zoom' );
    add_theme_support( 'wc-product-gallery-lightbox' );
    add_theme_support( 'wc-product-gallery-slider' );
}
