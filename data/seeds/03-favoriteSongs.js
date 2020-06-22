
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('favoriteSongs').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('favoriteSongs').insert([
        { id: 1, user_id: 1, song_id: 1, full_track_id: '6Wosx2euFPMT14UXiWudMy' },
        { id: 2, user_id: 1, song_id: 2, full_track_id: '38OiUD6l3Tm1jgSLGC9GNH' },
        { id: 3, user_id: 1, song_id: 3, full_track_id: '6vx0xD9tCnPhbOdC1s0cHM' },
      ]);
    });
};
