/**
 * jQuery behaviors for platform notification feeds.
 */
(function ($) {

  Drupal.behaviors.os_notifications = {

    attach: function (context, settings) {

      // Setup.
      var tourLink = '#os-tour-home';
      var $tourLink = $(tourLink);
      if (!$tourLink.length) {
        return;
      }
      if (typeof hopscotch == 'undefined') {
        return;
      }

      $tourLink.attr('href', '#');

      // Adds our tour overlay behavior with desired effects.
      $(tourLink, context).once('osTourHome', function() {
        $(this).wrap("<div class='os-tour-home-wrapper'></div>");
        $(this).click(function() {
          //$('.hopscotch-bubble').addClass('animated');
          // Sets up the tour object with the loaded feed item steps.
          var tour = {
            showPrevButton: true,
            scrollTopMargin: 100,
            id: "os-tour-home",
            steps: [
              {
                title: 'Welcome!',
                content: 'In this short tour, you\'ll learn all about how to build and manage your site.',
                target: document.querySelector('#os-tour-home'),
                placement: "left"
              },
              {
                title: 'Home: You are here',
                content: 'You can always go back home by clicking on this icon.',
                target: document.querySelector('#toolbar-home'),
                placement: "bottom"
              },
              {
                title: 'Content: The master list',
                content: 'Click here to view and manage every single post of content on your site.<br/><br/>Hover to:<ul><li><strong>Add</strong> new pages and posts</li><li><strong>Find</strong> your existing posts and files</li><li><strong>Import</strong> new content in bulk from a file or a feed URL</li></ul>',
                target: document.querySelector('#toolbar-menu'),
                placement: "bottom",
                yOffset: 100,
                onShow: function() { $('#toolbar-menu li:first a').mouseover(); }
              },
              {
                title: 'Build: Shape your site',
                content: 'Organize your site how you want.<ul><li><strong>Apps</strong>: the one-stop shop for new site sections</li><li><strong>Layout</strong>: add and drag \'n drop widgets where you want on the page</li><li><strong>Menu</strong>: control your sitemap and how users navigate your site</li><li><strong>Taxonomy</strong>: define categories to tag and organize posts in rich ways</li></ul>',
                target: document.querySelector('#toolbar-menu'),
                placement: "bottom",
                xOffset: 80,
                yOffset: 80,
                onShow: function() { $('#toolbar-menu li:nth-child(2) a').mouseover(); },
                onNext: function() { $('#toolbar-menu li:nth-child(2) a').mouseout(); }
              },
              {
                title: 'Appearance: Try on a new look',
                content: 'Switch up your color pallet, or try a completely different look and feel from many available themes.',
                target: document.querySelector('#toolbar-menu'),
                placement: "bottom",
                xOffset: 160
              },
              {
                title: 'Settings: Advanced options and features',
                content: 'Install Google Analytics for visitor tracking, change your site privacy settings, and much more.',
                target: document.querySelector('#toolbar-menu'),
                placement: "bottom",
                xOffset: 243,
                yOffset: 38,
                onShow: function() { $('#toolbar-menu li:nth-child(4) a').mouseover(); }
              },
              {
                title: 'People: Add members to your site',
                content: 'Invite people by email to allow access or various levels of administrator privileges.',
                target: document.querySelector('#toolbar-menu'),
                placement: "bottom",
                xOffset: 313,
                yOffset: 38,
                onShow: function() { $('#toolbar-menu li:nth-child(5) a').mouseover(); },
                onNext: function() { $('#toolbar-menu li:nth-child(5) a').mouseover(); }
              },
              {
                title: 'Section settings',
                content: 'Every page on your site has a section settings gear like this one.<br/><br/>In fact, hover almost anywhere and you\'ll start seeing even more little gears...',
                target: document.querySelector('#content-column'),
                placement: "left",
                xOffset: 922,
                yOffset: 10
              },
              {
                title: 'Let\'s get started!',
                content: 'We hope you enjoyed this tour. Be sure to use the <strong>Support</strong> link to tell us what you think, or to ask any questions if something comes up.<br/><br/>Thanks, and happy site building!',
                target: document.querySelector('#toolbar-menu'),
                placement: "bottom",
                xOffset: 380,
                yOffset: 34,
                onShow: function() { $('#toolbar-menu li:nth-child(6) a').mouseover(); },
                onNext: function() { $('#toolbar-menu li:nth-child(6) a').mouseout(); }
              }
            ]
          };
          hopscotch.startTour(tour);
          // Removes animation for each step.
          //$('.hopscotch-bubble').removeClass('animated');
          // Allows us to target just this tour in CSS rules.
          //$('.hopscotch-bubble').addClass('os-tour-cp-build-layout');
        });
        $tourLink.slideDown('slow');
      });

    }

  };

})(jQuery);
