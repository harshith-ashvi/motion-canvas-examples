import { Knot, Path, Rect, Spline, Txt, makeScene2D } from "@motion-canvas/2d";
import {
  all,
  chain,
  createRef,
  createRefMap,
  createSignal,
  easeInOutCubic,
  useDuration,
  waitFor,
} from "@motion-canvas/core";
import { nenapu } from "./../../constants/mungaruMale/nenepu";
import { male } from "./../../constants/mungaruMale/male";
import { nagu } from "./../../constants/mungaruMale/nagu";
import { koodlu } from "./../../constants/mungaruMale/koodalu";
import { gejje } from "./../../constants/mungaruMale/gejje";
import { beauty } from "./../../constants/mungaruMale/beauty";
import { voice } from "./../../constants/mungaruMale/voice";
import { watch } from "./../../constants/mungaruMale/watch";
import { devdas } from "./../../constants/mungaruMale/devdas";
import { boyHand, girlhand } from "./../../constants/mungaruMale/kai";
import {
  brokenHeart,
  brokenHeartLeft,
  brokenHeartRight,
} from "./../../constants/mungaruMale/heart";
import { bandaid } from "./../../constants/mungaruMale/bandaid";

export default makeScene2D(function* (view) {
  const paths = createRefMap<Path>();
  const textRef = createRef<Txt>();
  const spline = createRef<Spline>();
  const captionLength = createSignal(0);

  view.fill("#005f73");
  view.add(
    <>
      <Path
        ref={paths.nenapu}
        lineWidth={1}
        stroke={"#e9d8a6"}
        data={nenapu}
        position={[-650, -700]}
        scale={2.2}
        start={0}
        end={0}
      />
      <Path
        ref={paths.male}
        lineWidth={1}
        stroke={"#e9d8a6"}
        data={male}
        position={[-690, -800]}
        scale={2.2}
        start={0}
        end={0}
      />
      <Path
        ref={paths.nagu}
        lineWidth={1}
        stroke={"#e9d8a6"}
        data={nagu}
        position={[-530, -800]}
        scale={2.2}
        start={0}
        end={0}
      />
      <Path
        ref={paths.koodlu}
        lineWidth={1}
        stroke={"#e9d8a6"}
        data={koodlu}
        position={[-550, -800]}
        scale={2.1}
        start={0}
        end={0}
      />
      <Path
        ref={paths.gejje}
        lineWidth={1}
        stroke={"#e9d8a6"}
        data={gejje}
        position={[-750, -800]}
        scale={2.2}
        start={0}
        end={0}
      />
      <Path
        ref={paths.beauty}
        lineWidth={1}
        stroke={"#e9d8a6"}
        data={beauty}
        position={[-530, -800]}
        scale={2.2}
        start={0}
        end={0}
      />
      <Path
        ref={paths.voice}
        lineWidth={1}
        stroke={"#e9d8a6"}
        data={voice}
        position={[-600, -700]}
        scale={2}
        start={0}
        end={0}
      />
      <Path
        ref={paths.watch}
        lineWidth={1}
        stroke={"#e9d8a6"}
        data={watch}
        position={[-700, -800]}
        scale={3}
        start={0}
        end={0}
      />
      <Path
        ref={paths.devdas}
        lineWidth={1}
        stroke={"#e9d8a6"}
        data={devdas}
        position={[-675, -800]}
        scale={2.2}
        start={0}
        end={0}
      />

      <Path
        ref={paths.boyHand}
        lineWidth={1}
        stroke={"#e9d8a6"}
        data={boyHand}
        position={[-550, -1400]}
        scale={3}
        start={0}
        end={0}
      />

      <Path
        ref={paths.girlHand}
        lineWidth={1}
        stroke={"#e9d8a6"}
        data={girlhand}
        position={[-650, -1350]}
        scale={3}
        start={0}
        end={0}
      />

      <Path
        ref={paths.brokenHeart}
        lineWidth={1}
        stroke={"#e13238"}
        data={brokenHeart}
        position={[0, 0]}
        scale={0}
        start={0}
        end={0}
      />

      <Path
        ref={paths.bandaid}
        lineWidth={1}
        stroke={"#d5a97d"}
        data={bandaid}
        position={[-750, -650]}
        scale={2.5}
        start={0}
        end={0}
      />

      <Path
        ref={paths.brokenHeartLeft}
        lineWidth={1}
        stroke={"#e13238"}
        data={brokenHeartLeft}
        position={[0, 0]}
        scale={0}
        start={0}
        end={0}
      />

      <Path
        ref={paths.brokenHeartRight}
        lineWidth={1}
        stroke={"#e13238"}
        data={brokenHeartRight}
        position={[0, 0]}
        scale={0}
        start={0}
        end={0}
      />

      <Spline ref={spline} lineWidth={4} fill={"#e13238"} scale={0} closed>
        <Knot position={[-120, -30]} startHandle={[0, 70]} />
        <Knot
          position={[0, -50]}
          startHandle={[-40, -60]}
          endHandle={[40, -60]}
        />
        <Knot position={[120, -30]} startHandle={[0, -70]} />
        <Knot position={[0, 100]} startHandle={[5, 0]} />
      </Spline>

      <Rect
        height={captionLength ? 75 : 0}
        width={() => captionLength() * 30}
        fill={"#ee9b00"}
        radius={10}
        y={500}
      >
        <Txt ref={textRef}></Txt>
      </Rect>
    </>
  );

  yield* chain(
    chain(
      all(
        captionLength("ನಿಮ್ಮ ನೆನೆಪು".length, 1),
        textRef().text("ನಿಮ್ಮ ನೆನೆಪು", 1),
        paths.nenapu().start(1, useDuration("nenapu"))
      ),
      paths.nenapu().fill("#e9d8a6", 0.1)
    ),
    all(
      paths.nenapu().position([-550, -950], 0.1),
      paths.nenapu().scale(0.7, 0.1),
      paths.nenapu().opacity(0.2, 0.1)
    ),
    chain(
      all(
        captionLength("ಈ ಬಿಕನಾಸಿ ಮಳೆ".length, 0.1),
        textRef().text("ಈ ಬಿಕನಾಸಿ ಮಳೆ", 0.1),
        paths.male().start(1, 0.5)
      ),
      paths.male().fill("#e9d8a6", 0.1)
    ),
    all(
      paths.male().position([-250, -950], 0.1),
      paths.male().scale(0.7, 0.1),
      paths.male().opacity(0.2, 0.1)
    ),
    chain(
      all(
        captionLength("ನಿಮ್ಮ ನಗು".length, 0.1),
        textRef().text("ನಿಮ್ಮ ನಗು", 0.1),
        paths.nagu().start(1, 0.7),
        paths.nagu().fill("#e9d8a6", 0.1)
      )
    ),
    all(
      paths.nagu().position([150, -950], 0.1),
      paths.nagu().scale(0.7, 0.1),
      paths.nagu().opacity(0.2, 0.1)
    ),
    chain(
      all(
        captionLength("ನಿಮ್ಮ ಕೂದಲು".length, 0.1),
        textRef().text("ನಿಮ್ಮ ಕೂದಲು", 0.1),
        paths.koodlu().start(1, 0.7),
        paths.koodlu().fill("#e9d8a6", 0.1)
      )
    ),
    all(
      paths.koodlu().position([-525, -600], 0.1),
      paths.koodlu().scale(0.7, 0.1),
      paths.koodlu().opacity(0.2, 0.1)
    ),
    chain(
      all(
        captionLength("ನಿಮ್ಮ ಗೆಜ್ಜೆ ಸದ್ದು".length, 0.1),
        textRef().text("ನಿಮ್ಮ ಗೆಜ್ಜೆ ಸದ್ದು", 0.1),
        paths.gejje().start(1, 1.3),
        paths.gejje().fill("#e9d8a6", 0.1)
      )
    ),
    all(
      paths.gejje().position([-300, -500], 0.1),
      paths.gejje().scale(0.7, 0.1),
      paths.gejje().opacity(0.2, 0.1)
    ),
    chain(
      all(
        captionLength("ನಿಮ್ಮ ಬ್ಯೂಟಿ".length, 0.1),
        textRef().text("ನಿಮ್ಮ ಬ್ಯೂಟಿ", 0.1),
        paths.beauty().start(1, 1.2),
        paths.beauty().fill("#e9d8a6", 0.1)
      )
    ),
    all(
      paths.beauty().position([150, -450], 0.1),
      paths.beauty().scale(0.7, 0.1),
      paths.beauty().opacity(0.2, 0.1)
    ),
    chain(
      all(
        captionLength("ನಿಮ್ಮ ವಾಯ್ಸು".length, 0.5),
        textRef().text("ನಿಮ್ಮ ವಾಯ್ಸು", 0.5),
        paths.voice().start(1, 1.2),
        paths.voice().fill("#e9d8a6", 0.1)
      )
    ),
    all(
      paths.voice().position([-530, -150], 0.1),
      paths.voice().scale(0.7, 0.1),
      paths.voice().opacity(0.2, 0.1)
    ),
    chain(
      all(
        captionLength("ಆ ವಾಚು".length, 0.1),
        textRef().text("ಆ ವಾಚು", 0.1),
        paths.watch().start(1, 1),
        paths.watch().fill("#e9d8a6", 0.1)
      )
    ),
    all(
      paths.watch().position([-250, -150], 0.1),
      paths.watch().scale(1, 0.1),
      paths.watch().opacity(0.2, 0.1)
    ),
    chain(
      all(
        captionLength("ಆ ರಾಸ್ಕಲ್‌ ದೇವದಾಸ್‌ ಗಂಟೆ ಸದ್ದು".length, 0.5),
        textRef().text("ಆ ರಾಸ್ಕಲ್‌ ದೇವದಾಸ್‌ ಗಂಟೆ ಸದ್ದು", 0.5),
        paths.devdas().start(1, 2.2),
        paths.devdas().fill("#e9d8a6", 2)
      )
    ),

    all(
      paths.devdas().position([100, 0], 0.1),
      paths.devdas().scale(0.7, 0.1),
      paths.devdas().opacity(0.2, 0.1)
    ),

    all(
      captionLength("ಎಲ್ಲ ಮಿಕ್ಸಾಗಿ".length, 1),
      textRef().text("ಎಲ್ಲ ಮಿಕ್ಸಾಗಿ", 1),
      paths.nenapu().opacity(1, 0.1),
      paths.male().opacity(1, 0.1),
      paths.nagu().opacity(1, 0.1),
      paths.koodlu().opacity(1, 0.1),
      paths.gejje().opacity(1, 0.1),
      paths.beauty().opacity(1, 0.1),
      paths.voice().opacity(1, 0.1),
      paths.watch().opacity(1, 0.1),
      paths.devdas().opacity(1, 0.1),
      paths.nenapu().position([-200, -150], 0.9),
      paths.male().position([-200, -200], 0.9),
      paths.nagu().position([-200, -150], 0.9),
      paths.koodlu().position([-200, -150], 0.9),
      paths.gejje().position([-200, -150], 0.9),
      paths.beauty().position([-200, -150], 0.9),
      paths.voice().position([-200, -150], 0.9),
      paths.watch().position([-200, -150], 0.9),
      paths.devdas().position([-200, -150], 0.9)
    ),

    all(
      captionLength("ನನ್ನ ಇಡೀ ಲೈಫಲ್ಲಿ".length, 1),
      textRef().text("ನನ್ನ ಇಡೀ ಲೈಫಲ್ಲಿ", 1),
      paths.nenapu().scale(0, 0.4),
      paths.male().scale(0, 0.4),
      paths.nagu().scale(0, 0.4),
      paths.koodlu().scale(0, 0.4),
      paths.gejje().scale(0, 0.4),
      paths.beauty().scale(0, 0.4),
      paths.voice().scale(0, 0.4),
      paths.watch().scale(0, 0.4),
      paths.devdas().scale(0, 0.4),
      spline().scale(3, 0.6).to(2.5, 0.4)
    ),

    all(
      captionLength("ರಿಪೇರಿ ಮಾಡಕ್ಕೆ ಆಗದೆ ಇರುವಷ್ಟು".length, 1),
      textRef().text("ರಿಪೇರಿ ಮಾಡಕ್ಕೆ ಆಗದೆ ಇರುವಷ್ಟು", 1),
      spline().scale(3, 0.6).to(2, 0.4)
    ),

    all(
      captionLength("ದೊಡ್ಡ ಗಾಯ ಆಗೊಯತ್ರಿ".length, 1),
      textRef().text("ದೊಡ್ಡ ಗಾಯ ಆಗೊಯತ್ರಿ", 1),
      spline().scale(2.5, 0.6).to(1.5, 0.4),
      paths.brokenHeart().start(1, 0.1),
      paths.brokenHeart().fill("#e13238", 0.1)
    ),

    all(
      captionLength("ಈ ದರಿದ್ರ ಹಾರ್ಟಲ್ಲಿ".length, 1),
      textRef().text("ಈ ದರಿದ್ರ ಹಾರ್ಟಲ್ಲಿ", 1),
      spline().scale(2, 0.6).to(0, 0.4)
    ),
    all(
      paths.brokenHeart().scale(3, 1),
      paths.brokenHeart().position([-875, -600], 1)
    ),
    waitFor(0.5),
    all(paths.bandaid().start(1, 1), paths.bandaid().fill("#d5a97d", 1)),
    waitFor(0.5),
    all(
      paths.boyHand().start(1, 0.4),
      paths.boyHand().fill("#e9d8a6", 0.1),
      paths.girlHand().start(1, 0.4),
      paths.girlHand().fill("#e9d8a6", 0.1)
    ),

    all(
      captionLength("ಬಿಟ್ಕೊಡ್ಬಿಟೆ ಕಂಣ್ರಿ".length, 0.9),
      textRef().text("ಬಿಟ್ಕೊಡ್ಬಿಟೆ ಕಂಣ್ರಿ", 0.9),
      paths.boyHand().position.x(-650, 2.5, easeInOutCubic),
      paths.girlHand().position.x(-400, 2.5, easeInOutCubic),
      paths.brokenHeart().scale(0, 1),
      paths.brokenHeart().position([0, 0], 1),
      paths.bandaid().scale(0, 1),
      paths.bandaid().position([0, 0], 1),
      paths.brokenHeartLeft().start(1, 1),
      paths.brokenHeartLeft().fill("#e13238", 1),
      paths.brokenHeartLeft().scale(4, 1),
      paths.brokenHeartLeft().position([-1200, -800], 1),
      paths.brokenHeartRight().start(1, 1),
      paths.brokenHeartRight().fill("#e13238", 1),
      paths.brokenHeartRight().scale(4, 1),
      paths.brokenHeartRight().position([-1200, -800], 1)
    ),
    all(
      captionLength("ನಿಮ್ಮನ್ನ ಬಿಟ್ಕೊಟ್ಬಿಟ್ಟೆ".length, 1),
      textRef().text("ನಿಮ್ಮನ್ನ ಬಿಟ್ಕೊಟ್ಬಿಟ್ಟೆ", 1),
      paths.brokenHeartLeft().position.x(-1300, 1.5),
      paths.brokenHeartRight().position.x(-1100, 1.5)
    )
  );

  yield* waitFor(1.2);
});
