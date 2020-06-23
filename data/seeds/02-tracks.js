  

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tracks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tracks').insert([
        { id: 1, track_id: '6Wosx2euFPMT14UXiWudMy', track_name: 'Radio Silence', artist_name: 'R3HAB' },
        { id: 2, track_id: '38OiUD6l3Tm1jgSLGC9GNH', track_name: 'A State Of Trance (ASOT 874) - Interview with ARTY, Pt. 2', artist_name: 'Armin van Buuren	' },
        { id: 3, track_id: '6vx0xD9tCnPhbOdC1s0cHM', track_name: 'imaginary friends - ov', artist_name: 'deadmau5' }
      ]);
    });
};
