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

function wpb_floating_bar() {
    wp_enqueue_script( 'wpb-footerbar', get_stylesheet_directory_uri() . '/js/floatingbar.js', array( 'jquery' ) );
}
add_action( 'wp_enqueue_scripts', 'wpb_floating_bar' );

/* Remove product meta */
remove_action( 'woocommerce_single_product_summary', 'woocommerce_template_single_meta', 40 );

// add_action( 'woocommerce_before_variations_form', 'bbloomer_custom_action', 5 );
 
// function r_custom_action() {
// 	echo 'TEST';
// }bbloome

// add_action( 'woocommerce_single_variation', 'bbloomer_custom_action', 5 );

// add_filter( 'woocommerce_dropdown_variation_attribute_options_html', 'override_color_variation_display');

// function override_color_variation_display( $html,$args ) {
//     $html = 'Some override';

//     return $html;
// }