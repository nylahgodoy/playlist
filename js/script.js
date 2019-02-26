/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["20 Min", "Tetris", "Get You", "XX"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
 var artists = ["Lil Uzi Vert", "Derek King", "Daniel Ceasar", "Marc E. Bassy"];
 var songLength = ["3:40", "3:48", "4:30", "3:30"];
 var imgLinks = ["", "", "", ""];
 var songLink = ["", "", "", ""];





function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song) {
        $("#songs").append("<div>" + song + "</div>");
        });
    artists.forEach(function(artists) {
        $("#artists").append("<li>" + artists + "</li>");
        });
    songLength.forEach(function(length) {
        $("#lengths").append("<li>" + songLength + "</li>");
        });
    imgLinks.forEach(function(img) {
        $("#images").append("<li>" + img + "</li>");
        });
    songLink.forEach(function(links) {
        $("#links").append("<li>" + links + "</li>");
        });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#artist").empty();
    $("#length").empty();
    $("#image").empty();
    $("#link").empty();

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    var name = $("#songs").val();
        songs.push(name)
    var name = $("#artists").val();
        artists.push(name)
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
