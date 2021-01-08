import React from 'react';

const AnimationContent = ({ background1, background2, foreground1, foreground2, red_queen_and_alice_sprite}) => {
    return (  <div className="wrapper">
    <div className="sky"></div>
    <div className="earth">
      <div className="red-queen_and_alice">
        <img
          ref={ red_queen_and_alice_sprite.ref }
          className="red-queen_and_alice_sprite"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
          srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
          alt="Alice and the Red Queen running to stay in place."
        />
      </div>
    </div>
    <div ref={ foreground1.ref } className="scenery foreground1">
      <img
        className="palm3"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x"
        alt=" "
      />
    </div>
    <div ref={ foreground2.ref } className="scenery foreground2">
      <img
        className="bush"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x"
        alt=" "
      />
      <img
        className="w_rook_upright"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x"
        alt=" "
      />
    </div>
    <div ref={background1.ref} className="scenery background1" >
      <img
        className="r_pawn_upright"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x"
        alt=" "
      />
      <img
        className="w_rook"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x"
        alt=" "
      />
      <img
        className="palm1"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x"
        alt=" "
      />
    </div>
    <div ref={background2.ref} className="scenery background2">
      <img
        className="r_pawn"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x"
        alt=" "
      />

      <img
        className="r_knight"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x"
        alt=" "
      />
      <img
        className="palm2"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png"
        srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x"
        alt=" "
      />
    </div>
 
  </div> );
}
 
export default AnimationContent;