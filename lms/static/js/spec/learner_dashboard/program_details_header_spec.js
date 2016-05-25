define([
        'backbone',
        'jquery',
        'js/learner_dashboard/views/program_header_view'
    ], function (Backbone, $, ProgramHeaderView) {
        
        'use strict';
        
        describe('Program Details Header View', function () {
            var view = null,
                programModel,
                context = {
                    uuid: '12-ab',
                    name: 'Astrophysics',
                    subtitle: 'Learn contemporary astrophysics from the leaders in the field.',
                    category: 'xseries',
                    organizations: [
                        {
                            display_name: 'Australian National University',
                            img: 'https://edxuploads.s3.amazonaws.com/organization_logos/logo-anux.png',
                            key: 'ANUx'
                        }
                    ],
                    banner_image_urls: {
                        w1440h480: 'common/test/data/static/picture1.jpg',
                        w726h242: 'common/test/data/static/picture2.jpg',
                        w348h116: 'common/test/data/static/picture3.jpg'
                    },
                    program_details_url: '/dashboard/programs'
                };

            beforeEach(function() {
                setFixtures('<div class="js-program-header"></div>');
                programModel = new Backbone.Model(context);
                view = new ProgramHeaderView({
                    model: programModel
                });
                view.render();
            });

            afterEach(function() {
                view.remove();
            });

            it('should exist', function() {
                expect(view).toBeDefined();
            });

            it('should render the header based on the passed in model', function() {
                expect(view.$('.title').html()).toEqual(context.name);
                expect(view.$('.subtitle').html()).toEqual(context.subtitle);
                expect(view.$('.org-logo').length).toEqual(context.organizations.length);
                expect(view.$('.org-logo').attr('src')).toEqual(context.organizations[0].img);
                expect(view.$('.org-logo').attr('alt')).toEqual(context.organizations[0].display_name + '\'s logo');
            });
        });
    }
);
