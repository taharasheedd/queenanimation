import React, { useEffect } from "react";
import "./App.css";
import AnimationContent from "./components/animation-content.js";
import useWebAnimations from "@wellyshen/use-web-animations";

function App() {

  var redQueen = 1;
	var BackGround = 0;
 
    let sceneryFrames = [
      { transform: "translateX(100%)" },
      { transform: "translateX(-100%)" },
    ];

    let sceneryTimingBackground = {
      duration: 50000,
      iterations: Infinity,
    };

    let sceneryTimingForeground = {
      duration: 12000,
      iterations: Infinity,
    };

    const spriteFrames = [
      { transform: "translateY(0)" },
      { transform: "translateY(-100%)" },
    ];

    const background1Movement = useWebAnimations({
      keyframes: sceneryFrames,
      timing: sceneryTimingBackground
    }) 

    const background2Movement = useWebAnimations({
      keyframes: sceneryFrames,
      timing: sceneryTimingBackground
    }); 

    const foreground1Movement = useWebAnimations({
      keyframes: sceneryFrames,
      timing: sceneryTimingForeground
    });

    const foreground2Movement = useWebAnimations({
      keyframes: sceneryFrames,
      timing: sceneryTimingForeground
    });

      const red_queen_and_alice_sprite_movement = useWebAnimations({
        keyframes: spriteFrames,
        timing: {
          easing: "steps(7, end)",
        direction: "reverse",
        duration: 600,
        playbackRate: 1,
        iterations: Infinity,
        }
      });
      const adjustBackgroundPlayback = () => {
        if (redQueen < 0.8) {
          BackGround = (redQueen / 2) * -1;
        } else if (redQueen > 1.2) {
          BackGround = redQueen / 2;
        } else {
          BackGround = 0;
        }
        foreground1Movement.getAnimation().playbackRate = redQueen;
        foreground2Movement.getAnimation().playbackRate = redQueen;
        background1Movement.getAnimation().playbackRate = redQueen;
        background2Movement.getAnimation().playbackRate = redQueen;
      };
    
      useEffect(() => {
        const fganimation = foreground1Movement.getAnimation();
        fganimation.currentTime = fganimation.effect.getTiming().duration / 2;
    
        const bganimation = background1Movement.getAnimation();
        bganimation.currentTime = bganimation.effect.getTiming().duration / 2;
    
        setInterval(() => {
          if (redQueen > 0.4) {
            redQueen *= 0.9;
            red_queen_and_alice_sprite_movement.getAnimation().playbackRate = redQueen;
          }
          adjustBackgroundPlayback();
        }, 3000);
    
      });
  return (
    <div onClick={() => {
      redQueen *= 1.1;
      red_queen_and_alice_sprite_movement.getAnimation().playbackRate = redQueen;
      adjustBackgroundPlayback();
    }} >
      <AnimationContent
        background1={background1Movement}
        background2={background2Movement}
        foreground1={foreground1Movement}
        foreground2={foreground2Movement}
        red_queen_and_alice_sprite={red_queen_and_alice_sprite_movement}

      />
    </div>
  );
}

export default App;
