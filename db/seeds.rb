# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bench.destroy_all

Bench.create([{description: 'This bench is next to the tenderloin! Watch out for the crackheads! :)', lat: 37.78415551, lng: -122.4149523}])
Bench.create([{description: 'This bench is next to dolores park. Ouch my back hurts, can I get a medical license please?', lat: 37.7597727, lng: -122.427063}])
Bench.create([{description: 'This bench is next to golden gate bridge. First row seats for bridge jumpers!', lat: 37.8199286, lng: -122.4782551}])
Bench.create([{description: 'This bench is next to japantown. Watashi waaaa', lat: 37.7854135, lng: -122.429383}])
Bench.create([{description: 'This bench is next to 160 spear st. Does that make sense?', lat: 37.7913765, lng: -122.3936249}])
Bench.create([{description: 'This bench is in DNA lounge. Unce Unce Unce Unce!', lat: 37.7710559, lng: -122.4126746}])
Bench.create([{description: 'This bench has "free" dinner. Are they still mad at us?', lat: 37.775744, lng: -122.418132}])
