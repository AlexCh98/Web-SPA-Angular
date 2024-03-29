(function ($, window, document) {

    "use strict";


    //$(window).on('load', function () {


    $(document).ready(function () {


        $(".dont_load").css("display", "none");
        $(".dont_load:first").css("display", "block");
        $('.show_href_onclick').click(function () {
            $(".dont_load").css("display", "none");
            var id_to_show = $(this).attr("href");
            console.log(id_to_show);
            $(id_to_show).css("display", "block");
        });
        $("ul.tab-filters li:first-child").addClass("active");
        $("div.tab-content div:first-child").addClass("active");
        $.each($("td.form > span"), function () {
            if ($(this).text() === "l") {
                $(this).addClass("lose")
            }
            if ($(this).text() === "w") {
                $(this).addClass("win")
            }
        });
        /**
         * Init matches slider
         * @html: ./html-component/matches-slider.html
         * @js: ./js/matches-slider.js
         */
        if ($('#main-slider').length > 0) {
            $('#main-slider').MatchesSlider();
        }

        /**
         * Init header sticky menu
         * @html: ./html-component/header.html
         * @js: ./js/header.js
         */
        if ($(".main-menu-wrap.sticky-menu").length > 0) {
            $(".main-menu-wrap.sticky-menu").teamHeader(1199);
        }

        /**
         * Toogle mini cart menu
         * @html: ./html-component/top-bar.html
         */
        $('.main-menu li.cart').on('click', function () {
            $('.cart-drop').toggle();
        });

        /**
         * Fast scroll to top button
         * @html: ./html-component/footer.html
         */
        $("a[href='#top']").on('click', function () {
            $("html, body").animate({scrollTop: 0}, "slow");
            return false;
        });

        /**
         * Country selector bootstrap dropdowns
         * @html: ./html-component/top-bar.html
         */
        $('.dropdown').on('show.bs.dropdown', function () {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        });
        $('.dropdown').on('hide.bs.dropdown', function () {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        });

        /**
         * Init bootstrap tooltips
         * @deps: bootstrap.js
         */
        $(function () {
            $('[data-toggle="tooltip"]').tooltip({container: 'body'});
        });

        /**
         * Init toogle sidebar menu
         */
        $('[data-toggle="offcanvas"]').on('click', function () {
            $('.row-offcanvas').toggleClass('active');
        });

        /**
         * Init collapse matches broadcasts listing items
         * @js: ./js/matches_broadcast_listing.js
         */
        if ($('.broadcast-list').length > 0) {
            $('.broadcast-list').matchesBroadcastLisng();
        }

        /**
         * Init match gallery line
         * @js: ./js/match_galery.js
         * @html: ./html-component/match_galery.html
         */
        if ($(".match-live-gallery").length > 0) {
            $(".match-live-gallery").teamMatchGallery();
        }


        /**
         * Init club gallery grid
         * @js: ./js/main-club-gallery.js
         * @html: ./html-component/main_club_gallery.html
         */
        if ($(".main-club-gallery").length > 0) {
            $(".main-club-gallery").mainClubGallery();
        }

        /**
         * Init news line
         * @js: ./js/news-line.js
         * @html: ./html-component/news_line.html
         */
        if ($(".main-news-list").length > 0) {
            $(".main-news-list").teamNewsLine();
        }

        /**
         * Init news line
         * @js: ./js/product-slider.js
         * @html: ./html-component/product_slider.html
         */
        if ($(".featured-products").length > 0) {
            $(".featured-products").teamProductSlider();
        }

        /**
         * Init Bootstrap tabs navigation events listener
         * @deps: bootstrap.js
         * @html: ./html-component/tournaments.html
         *        ./html-component/championship_navigation.html
         *        ./html-component/amateurs_match_schedule.html
         *        ./html-component/amateurs_news_list.html
         *        ./html-component/best_players.html
         *        ./html-component/main_store_container.html
         *        ./html-component/next_matc_score.html
         *        ./html-component/player_statistic_slider.html
         *        ./html-component/players_slider.html
         *        ./html-component/teams.html
         */
        $('.champ-navigation li a, .tab-filters li a, .player-filters li a').on('click', function (e) {

            if ($(e.target).is('a')) {
                e.preventDefault();
                $(this).tab('show');
                var teb_id = $(this).attr('href');
                $(teb_id).trigger('show');
            }

            return false;

        });

        /**
         * Fancy Select init
         * @desp: fancySelect
         */
        $('.basic').fancySelect();

        /**
         * Init circle-bar statistic elements
         * @html: ./html-component/player_single_wrap.html
         *        ./html-component/organisation_header.html
         * @js: ./js/circle-bar.js
         */
        if ($(".circle-bar").length > 0) {
            $(".circle-bar").each(function () {
                $(this).teamCircleBar();
            });
        }

        /**
         * Init standing brackets
         * @html: ./html-component/tournaments.html
         * @js: ./js/standings.js
         * @see [http://www.aropupu.fi/bracket/]
         */
        if ($('#qualification').length > 0) {

            $('#qualification').teamStandings({
                teams: [

                    ["Team 1", "Team 2"],
                    ["Team 3", "Team 4"],
                    ["Team 8", "Team 5"],
                    ["Team 6", "Team 7"]
                ],
                results: [
                    [[3, 2], [3, 4], [4, 5], [1, 0]],
                    [[4, 6], [2, 1]]
                ]
            });
        }

        /**
         * Init standing brackets
         * @html: ./html-component/tournaments.html
         * @js: ./js/standings.js
         * @see [http://www.aropupu.fi/bracket/]
         */
        if ($('#quarterfinal').length > 0) {

            $('#quarterfinal').teamStandings({
                teams: [
                    ["Team 4", "Team 5"],
                    ["CSA", "NFTA"],
                    ["Team 2 Pandas", "Heart of Willem"],
                    ["CSA", "Inverness"]
                ],
                results: [
                    [[3, 5], [2, 4], [8, 3], [2, 1]],
                    [[4, 6], [7, 3]],
                    [[2, 1]]
                ]
            });
        }

        /**
         * Init standing brackets
         * @html: ./html-component/tournaments.html
         * @js: ./js/standings.js
         * @see [http://www.aropupu.fi/bracket/]
         */
        if ($('#semifinal').length > 0) {

            $('#semifinal').teamStandings({
                teams: [
                    ["Team 3", "Team 4"],
                    ["Team 1", "Team 2"],
                    ["Team 6", "Team 7"],
                    ["Team 8", "Team 5"]
                ],
                results: [
                    [[3, 2], [8, 1], [2, 3], [2, 1]],
                    [[4, 6], [3, 2]]
                ]
            });
        }

        /**
         * Init standing brackets
         * @html: ./html-component/tournaments.html
         * @js: ./js/standings.js
         * @see [http://www.aropupu.fi/bracket/]
         */
        if ($('#final').length > 0) {

            $('#final').teamStandings({
                teams: [
                    ["Team 1", "Team 2"],
                    ["Team 6", "Team 7"]
                ],
                results: [
                    [[4, 6], [2, 1]],
                    [[2, 1]]
                ]
            });
        }

        /**
         * Init standing brackets
         * @js: ./js/shop-price-filter.js
         * @usage: ./store.html
         */
        if ($('.filter-slider').length > 0) {
            $('.filter-slider').teamShopPriceFilter();
        }

        /**
         * Init store filters event listener
         * @deps: checkbox.css
         * @usage: ./store.html
         */
        $('.filter-items-wrap .filter-title').on('click', function () {
            $(this).toggleClass('active');
            $(this).next().toggle('slow');
            return false;
        });

        /**
         * Add animate.css classes for animated elements
         * @deps: animate.css
         */
        if ($('.main-match-shedule, .single-player-stats').length > 0) {
            var scroll_listener = function () {
                if ($(this).scrollTop() > $('.main-match-shedule, .main-players-stat, .single-player-stats').offset().top - $(this).height()) {
                    $('.main-lates-matches a, .best-players-list a, .single-player-stats .carousel-inner .wrap').addClass('animated flipInX');
                }
            };
            $(window).on('scroll', scroll_listener);
        }

        /**
         * Init and configuration timeseries graphs
         * @js: ./js/timeseries.js.js
         * @usage: ./html-components/club_main_stat.html
         */
        if ($('#attack-per-game').length > 0) {

            $('#attack-per-game').teamGraphTimeseries(
                ['16 round', '17 round', '18 round', '19 round', '20 round', '21 round'],
                [
                    [75, 125, 100, 106, 55, 150],
                    [135, 75, 75, 45, 100, 90]
                ],
                [0, 50, 100, 150],
                '250px',
                false
            );

        }

        /**
         * Init and configuration timeseries graphs
         * @js: ./js/timeseries.js.js
         * @usage: ./html-components/club_main_stat.html
         */
        if ($('#tournament-path').length > 0) {

            $('#tournament-path').teamGraphTimeseries(
                ['11 round', '12 round', '13 round', '14 round', '15 round', '16 round', '17 round', '18 round', '19 round', '20 round', '21 round'],
                [
                    [4, 9, 6, 10, 13, 2, 5, 8, 6, 11, 3]
                ],
                [15, 10, 5, 1],
                '250px',
                true
            );

        }

        /**
         * Init and configuration timeseries graphs
         * @js: ./js/timeseries.js.js
         * @usage: ./html-components/player_stats.html
         */
        if ($('#player-timeseries-graph').length > 0) {

            $('#player-timeseries-graph').teamGraphTimeseries(
                ['16 round', '17 round', '18 round', '19 round', '20 round', '21 round'],
                [
                    [75, 125, 100, 106, 55, 150]
                ],
                [0, 50, 100, 150],
                '250px',
                false,
                [
                    80
                ]
            );
        }

        /**
         * Init and configuration radar graphs
         * @js: ./js/radar.js
         * @usage: ./html-components/player_single_wrap.html
         */

        var height = parseInt($("#stats > li#height").text()) * 100;
        var weight = parseInt($("#stats > li#weight").text());
        var endurance = parseInt($("#stats > li#endurance").text()) * 100;
        var speed = parseInt($("#stats > li#speed").text()) * 100;
        var accuaracy = parseInt($("#stats > li#accuaracy").text()) * 100;
        var aceleration = parseInt($("#stats > li#aceleration").text()) * 100;
        var strenght = parseInt($("#stats > li#strenght").text()) * 100;
        var pace = parseInt($("#stats > li#pace").text()) * 100;
        if ($('#player-radar-graph').length > 0) {
            $('#player-radar-graph').teamRadarGraph(
                'stats',
                ["Height", "Weight", "Endurance", "Speed", "Accuaracy", "Aceleration", "Strenght", "Pace"],
                [height, weight, endurance, speed, accuaracy, aceleration, strenght, pace],
                //[1, 2, 3, 4, 5, 6, 7, 8],
                200,
                200
            );

        }

        /**
         * Init main slider
         * @js: ./js/slider.js
         * @usage: ./html-components/amateurs_main_slider.html
         */
        if ($("#amateurs-slider").length > 0) {
            $("#amateurs-slider").teamSlider();
        }

        /**
         * Init and configuration player stats diagram
         * @js: ./js/diagram.js
         * @usage: ./html-components/player-stats.html
         */

        if ($('#diagram').length > 0) {
            $('#diagram').diagram(
                ['2013', '2014', '2015', '2016', '2017'],
                [
                    [12, 9, 7, 8, 5],
                    [2, 1, 3.5, 7, 3],
                    [1, 3, 4, 5, 6]
                ],
                false,
                5
            );
        }

        /**
         * Init and configuration net rating  graph
         * @js: ./js/bi-polar-diagram.js
         * @usage: ./html-components/player_stats.html
         */
        if ($('#bipolardiagram').length > 0) {
            $('#bipolardiagram').bipolardiagram(
                [1, 2, 3, 4, 5, 6, 7, 8],
                [
                    [0, 2, 6, 8, 10, 7, 5, 0],
                    [0, 0, -4, -5, -2.5, -1, -2, -3],
                    [-9, -9, -5, -9, -7, -8, -10, -10],
                    [-10, 2, 10, 0.5, 1, 0.5, -1, -2.5]
                ],
                10,
                -10,
                true,
                false,
                false,
                true,
                false,
                false
            );
        }

        /**
         * Init and configuration financial attendance graph
         * @js: ./js/label-placement-diagram.js
         * @usage: ./html-components/club_main_stat.html
         */

        if ($('#label_placement').length > 0) {
            $('#label_placement').label_placement(
                ['2011', '2012', '2013', '2014', '2015', '2016', '2017'],
                [120, 160, 145, 200, 180, 185, 190],
                true
            );


        }

        /**
         * Init and configuration assists per game  graph
         * @js: ./js/donut-chart.js
         * @usage: ./html-components/player_stats.html
         */

        if ($('#donutchart').length > 0) {
            $('#donutchart').donutchart(
                ['20', '10', '30', '40'],
                [20, 10, 30, 40],
                true,
                60,
                true,
                270,
                false
            );


        }


        /**
         * Init and configuration usage percentage  graph
         * @js: ./js/animate-donut.js
         * @usage: ./html-components/player_stats.html
         */
        var totalWins = parseInt($("#stats > li#totalWins").text());
        var totalDefeats = parseInt($("#stats > li#totalDefeats").text());
        if ($('#animatedonut').length > 0) {
            $('#animatedonut').animatedonut(
                ['L', 'W'],
                [totalDefeats, totalWins],
                true,
                true
            );
        }

        /**
         * Init and configuration points per game graph
         * @js: ./js/advanced-smil.js
         * @usage: ./html-components/player_stats.html
         */
        var stringGames = $("#games > li#gamesPerMatch").text();
        console.log(stringGames);
        var arrayGames = stringGames.split("|");
        if ($('#advancesmill').length > 0) {
            $('#advancesmill').advancesmill(
                [
                    arrayGames,
                ],
                0,
                ['Games per match'],
                true,
                'bottom'
            );
        }

        /**
         * Init and configuration raitings graph
         * @js: ./js/svg-path.js
         * @usage: ./html-components/club_main_stat.html
         */
        if ($('#svgpath').length > 0) {
            $('#svgpath').svgpath(
                ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                [
                    [1, 5, 2, 5, 4, 3],
                    [2, 3, 4, 8, 1, 2],
                    [5, 4, 3, 2, 1, 0.5]
                ],
                0,
                true,
                false,
                false
            );
        }


        /**
         * Init and configuration financial indicators graph
         * @js: ./js/pick-circle.js
         * @usage: ./html-components/club_main_stat.html
         */
        if ($('#pickcircle').length > 0) {
            $('#pickcircle').pickcircle(
                ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
                [
                    [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
                ],
                10,
                -10
            );
        }

        /**
         * Init and configuration Pace  graph
         * @js: ./js/horizontal-bar.js
         * @usage: ./html-components/player_stats.html
         */
        var meanAccuracy = parseInt($("#personalStats > li#meanAcurracy").text());
        var meanEffectiveness = parseInt($("#personalStats > li#meanEffectiveness").text());
        var meanUnforcedErrors = parseInt($("#personalStats > li#meanUnforcedErrors").text());

        if ($('#horizontalbar').length > 0) {
            $('#horizontalbar').horizontalbar(
                ['Accuracy', 'Effectiveness', 'Unforced Errors'],
                [
                    [meanAccuracy, meanEffectiveness, meanUnforcedErrors],
                ],
                10,
                true,
                true,
                ['%'],
                true,
                'bottom',
                120
            );
        }

        var accuracy1 = parseInt($("#team1Stats > li#accuracy1").text());
        var effectiveness1 = parseInt($("#team1Stats > li#effectiveness1").text());
        var wins1 = parseInt($("#team1Stats > li#wins1").text());
        var unferrors1 = parseInt($("#team1Stats > li#unferrors1").text());

        if ($('#horizontalbarMatch1').length > 0) {
            $('#horizontalbarMatch1').horizontalbar(
                ['Accuracy', 'Effectiveness','wins','Unforced Errors'],
                [
                    [accuracy1, effectiveness1, wins1, unferrors1],
                ],
                10,
                true,
                true,
                ['%'],
                true,
                'bottom',
                120
            );
        }

        var accuracy2 = parseInt($("#team2Stats > li#accuracy2").text());
        var effectiveness2 = parseInt($("#team2Stats > li#effectiveness2").text());
        var wins2 = parseInt($("#team2Stats > li#wins2").text());
        var unferrors2 = parseInt($("#team2Stats > li#unferrors2").text());

        if ($('#horizontalbarMatch2').length > 0) {
            $('#horizontalbarMatch2').horizontalbar(
                ['Accuracy', 'Effectiveness','wins','Unforced Errors'],
                [
                    [accuracy2, effectiveness2, wins2, unferrors2],
                ],
                10,
                true,
                true,
                ['%'],
                true,
                'bottom',
                120
            );
        }

        /**
         * Init and configuration main investors graph
         * @js: ./js/gauge-chart.js
         * @usage: ./html-components/club_main_stat.html
         */
        if ($('#gaugechart').length > 0) {
            $('#gaugechart').gaugechart(
                [20, 10, 30, 40],
                true,
                60,
                true,
                270,
                200,
                true,
                ['Investor Name 1', 'Investor Name 2', 'Investor Name 3', 'Investor Name 4'],
                true
            );
        }

        /**
         * Init and configuration salary cap graph
         * @js: ./js/stacked-bar.js
         * @usage: ./html-components/club_main_stat.html
         */
        if ($('#stackedbar').length > 0) {
            $('#stackedbar').stackedbar(
                ['Q1', 'Q2', 'Q3', 'Q4'],
                [
                    [800000, 1200000, 1400000, 1300000],
                    [200000, 400000, 500000, 300000],
                    [100000, 200000, 400000, 600000]
                ],
                true
            );
        }

        /**
         * Init and configuration threshold graph
         * @js: ./js/stacked-bar.js
         * @usage: ./html-components/player_stats.html
         */
        if ($('#threshold').length > 0) {
            $('#threshold').threshold(
                ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                [
                    [5, -4, -10, -8, 15, 14, 12, 8, 3, -5, -15, -8]

                ],
                true,
                4
            );
        }

        /** Sport-team-landing.html js start**/


        if ($("#header").length > 0) {
            $("#header").teamHeader(1199);
        }

        /**
         * Init and configuration anchor links scroll
         * @js: ./js/anchor.js
         * @usage: ./templates/sport-team-landing.html
         *         ./html-component/landing_sport_standings.html
         *         ./html-component/landing_sport_header.html
         *         ./html-component/landing_sport_main_slider.html
         *         ./html-component/landing_sport_players_slider.html
         *         ./html-component/landing_sport_main_news.html
         *         ./html-component/landing_sport_about.html
         *         ./html-component/landing_sport_twitter_slider.html
         */
        if ($("#landing-header").length > 0) {
            $("#landing-header").anchor(3000, ".sport-team-lp-header", "#header");
        }

        /**
         * Init and configuration landing gallery
         * @js: ./js/landing_carousel.js
         * @usage: ./html-components/landing_sport_galery.html
         */
        if ($("#owl-carousel-gallery, #owl-carousel-gallery-1").length > 0) {
            $("#owl-carousel-gallery,#owl-carousel-gallery-1").landingCarousel();
        }

        /**
         * Init and configuration landing standings
         * @js: ./js/landing_sport_standings.js
         * @usage: ./html-components/landing_sports_standings.html
         */
        if ($(".landing-sport-standings").length > 0) {
            $(".landing-sport-standings").sportStandings();
        }
        /**
         * Init and configuration landing standings
         * @js: ./js/landing_sport_standings.js
         * @usage: ./html-components/landing_sport_twitter_slider.html
         */
        if ($("#twitter-slider").length > 0) {
            $("#twitter-slider").sliderTwitter();
        }

        /** sport-team-landing.html js end**/


        /** sport-championship-landing.html js start**/

        /**
         * Init and configuration main slider
         * @js: ./js/landing_sport_standings.js
         * @usage: ./html-components/sport_championship_main_slider.html
         */
        if ($(".sport_champoinship_main_slider").length > 0) {
            $(".older-slide-posts").slider(1600);
        }

        /****** **/

        if ($("#sport_championship_header").length > 0) {
            $("#sport_championship_header").teamHeader(1199);
        }

        if ($("#sport_championship_header").length > 0) {
            $("#landing-header").anchor(3000, "#landing-header", ".sport-cmapionship-header");
        }

        /**
         * Init and configuration landing standings
         * @js: ./js/landing_sport_standings.js
         * @usage: ./html-components/sport_championship_standings.html
         */

        if ($(".sport-championship-standings").length > 0) {
            $(".sport-championship-standings").sportStandings();
        }

        /**
         * Init and configuration champions timeline tabs
         * @js: ./js/landing_sport_standings.js
         * @usage: ./html-components/sport_championship_timline_tabs.html
         * @usage: ./html-components/sport_championship_win_team.html
         * @usage: ./html-components/sport_championship_places.html
         */

        if ($(".sport-championship-timline-tabs").length > 0) {
            $(".sport-championship-timline-tabs").champions();
        }
        /**
         * Init and configuration news slider
         * @js: ./js/landing_sport_standings.js
         * @usage: ./html-components/sport_championship_timline_tabs.html
         * @usage: ./html-components/sport_championship_win_team.html
         * @usage: ./html-components/sport_championship_places.html
         */
        if ($(".sport-championship-news").length > 0) {
            $(".sport-championship-news").newsSlider();
        }

        /**
         * Init and configuration latest video
         * @js: ./js/landing_sport_standings.js
         * @usage: ./html-components/sport_championship_latest_videos.html

         */
        if ($(".sport-championship-videos").length > 0) {
            $(".sport-championship-videos").videoslider();
        }

        /** sport-championship-landing.html js end**/

        /** esport-team-landing.html js start**/

        /**
         * Init and configuration latest video
         * @js: ./js/landing_sport_standings.js
         * @usage: ./html-components/sport_championship_latest_videos.html
         */

        if ($(".esport-team-landing-latest-videos").length > 0) {
            $(".esport-team-landing-latest-videos").videoslider();
        }

        if ($("#esport-team-landing-header").length > 0) {
            $("#esport-team-landing-header").teamHeader(1199);
        }


        if ($(".esport-team-landing-header").length > 0) {
            $("#landing-header").anchor(3000, "#landing-header");
        }

        /**
         * Init and configuration players slide
         * @js: ./js/landing_sport_standings.js
         * @usage: ./html-components/sport_championship_players.html
         */
        if ($(".esport-team-landing-players").length > 0) {
            $(".esport-team-landing-players").players();
        }
        /**
         * Init and configuration footer news slide
         * @js: ./js/footer_slides.js
         * @usage: ./html-components/esport_team_landing_footer.html
         */

        if ($(".esport-team-landing-footer").length > 0) {
            $(".esport-team-landing-footer").footerSlide();
        }


        /** esport-team-landing.html js end  **/


        /** esport-championship-landing.html js start**/
        if ($(".esport-cmapionship-header").length > 0) {
            $(".esport-cmapionship-header").teamHeader(1199);
        }


        if ($(".esport-cmapionship-header").length > 0) {
            $("#landing-header").anchor(3000, "#landing-header");
        }
        /**
         * Init and configuration champions timeline tabs
         * @js: ./js/landing_sport_standings.js
         * @usage: ./html-components/esport_championship_timline_tabs.html
         * @usage: ./html-components/esport_championship_win_team.html
         * @usage: ./html-components/esport_championship_places.html
         */
        if ($(".esport-championship-timline-tabs").length > 0) {
            $(".esport-championship-timline-tabs").champions();
        }

        /**
         * Init and configuration landing standings
         * @js: ./js/landing_sport_standings.js
         * @usage: ./html-components/esport_championship_standings.html
         */

        if ($(".esport-championship-standings").length > 0) {
            $(".esport-championship-standings").sportStandings();
        }

        /**
         * Init and configuration latest video
         * @js: ./js/landing_sport_standings.js
         * @usage: ./html-components/sport_championship_latest_videos.html
         */
        if ($(".esport-championship-latest-videos").length > 0) {
            $(".esport-championship-latest-videos").videoslider();
        }
        /**
         * Init and configuration players slide
         * @js: ./js/landing_sport_standings.js
         * @usage: ./html-components/esport_championship_players.html
         */
        if ($(".esport-championship-players").length > 0) {
            $(".esport-championship-players").players();
        }
        /**
         * Init and configuration main slider
         * @js: ./js/landing_sport_standings.js
         * @usage: ./html-components/esport_championship_main_slider.html
         */
        if ($(".esport_champoinship_main_slider").length > 0) {
            $(".esport_champoinship_main_slider").slider();
        }

        /** esport-championship-landing.html js end**/
    });


//});
})(jQuery, window, document);


(function ($) {
    "use strict";


    /*==================================================================
   [ Focus input ]*/
    $('.input100').each(function () {
        $(this).on('blur', function () {
            if ($(this).val().trim() != "") {
                $(this).addClass('has-val');
            } else {
                $(this).removeClass('has-val');
            }
        })
    });


    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
            if (validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function () {
        $(this).focus(function () {
            hideValidate(this);
        });
    });

    function validate(input) {
        if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        } else {
            if ($(input).val().trim() == '') {
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }


})(jQuery);