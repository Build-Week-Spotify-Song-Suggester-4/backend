exports.up = function(knex) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('username', 128).notNullable().unique();
            tbl.string('password', 128).notNullable();
            tbl.string('first_name', 128).notNullable();
            tbl.string('last_name', 128).notNullable();
        })
        .createTable('tracks', tbl => {
            tbl.increments();
            tbl.string('track_id').notNullable();
            tbl.string('track_name').notNullable();
            tbl.string('artist_name').notNullable();
            tbl.float('acousticness').unsigned();
            tbl.integer('duration_ms').unsigned();
            tbl.float('energy').unsigned();
            tbl.float('instrumentalness').unsigned();
            tbl.integer('key').unsigned();
            tbl.float('liveness').unsigned();
            tbl.float('loudness');
            tbl.integer('mode').unsigned();
            tbl.float('speechiness').unsigned();
            tbl.float('tempo');
            tbl.integer('time_signature').unsigned();
            tbl.float('valence').unsigned();
            tbl.integer('popularity');
            tbl.string('genre');
        })
        .createTable('favoriteSongs', tbl => {
            tbl.increments();
            tbl
                .integer('user_id')
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl
                .integer('song_id')
                .notNullable()
                .references('id')
                .inTable('tracks')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl 
                .string('full_track_id')
                .notNullable();
        })
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTableIfExists('favoriteSongs')
        .dropTableIfExists('tracks')
        .dropTableIfExists('users')
};
