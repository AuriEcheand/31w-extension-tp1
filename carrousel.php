<?php

/**
 * Plugin Name: Carrousel
 * Description: Carrousel d'image créé à partir d'une galerie
 * Author: Auristela Echeverria
 * Plugin URI: https://github.com/AuriEcheand/31w-extension-tp1
 */

function carrousel_31W_enqueue()
{
    $version_css = filemtime(plugin_dir_path(__FILE__) . "style.css");
    $version_js = filemtime(plugin_dir_path(__FILE__) . "script/carrousel.js");
    //var_dump(__FILE__); die()
    wp_enqueue_style(   'carrousel_31W_css', 
                         plugin_dir_url(__FILE__) . "style.css", 
                         array(), 
                         $version_css);

    wp_enqueue_script(   'carrousel_31W_js', 
                        plugin_dir_url(__FILE__) . "script/carrousel.js", 
                        array(), 
                        $version_js, 
                        true);
}
add_action('wp_enqueue_scripts', 'carrousel_31W_enqueue');

function genere_carrousel(){
///////////////////////////HTML
// Le conteneur du carrousel
$contenu = '<div class="carrousel"';
 // Le bouton fermeture
$contenu .= '<button class="carrousel__fermeture">X</button>';
// Le conteneur d'images
$contenu .= '<figure class="carrousel__figure"></figure>';
// Le formulaire des radio bouton pour naviguer d'une image à l'autre
$contenu .= '<form class="carrousel__radio"></form>';
$contenu .= '</div><!--fin du carrousel-->';
return $contenu;

}
add_shortcode('carrousel', 'genere_carrousel');  
