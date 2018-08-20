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

/*footer bar*/
function wpb_floating_bar() {
    wp_enqueue_script( 'wpb-footerbar', get_stylesheet_directory_uri() . '/js/floatingbar.js', array( 'jquery' ) );
}
add_action( 'wp_enqueue_scripts', 'wpb_floating_bar' );
/*end footer bar*/

/*top bar*/
function wpt_floating_bar() {
    wp_enqueue_script( 'wpb-topbar', get_stylesheet_directory_uri() . '/js/floatingbar2.js', array( 'jquery' ) );
}
add_action( 'wp_enqueue_scripts', 'wpt_floating_bar' );
/*end top bar*/

/* Remove product meta */
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );

