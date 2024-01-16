import { Rect, Txt, makeScene2D } from "@motion-canvas/2d";
import { all, chain, createRef } from "@motion-canvas/core";

export default makeScene2D(function* (view) {
  const rectSlider = createRef<Rect>();
  const rectMask = createRef<Rect>();
  const textRef = createRef<Txt>();

  view.fill("#a8dadc");
  view.add(
    <>
      <Rect
        ref={rectSlider}
        width={10}
        height={0}
        x={-400}
        fill={"#1d3557"}
        rotation={10}
        zIndex={2}
      />
      <Txt
        ref={textRef}
        scale={1.5}
        text={"HARSHITH"}
        fill={"#e63946"}
        fontSize={75}
        fontWeight={800}
      />
      <Rect
        ref={rectMask}
        width={800}
        height={800}
        x={-390 + 400}
        fill={"#a8dadc"}
        rotation={10}
        zIndex={2}
      />
    </>
  );

  yield* chain(
    rectSlider().height(400, 1),
    all(rectSlider().position.x(400, 1.5), rectMask().position.x(810, 1.5)),
    all(rectSlider().position.x(-400, 1.5), rectMask().position.x(10, 1.5)),
    textRef().text("ASHVI", 0),
    all(rectSlider().position.x(400, 1.5), rectMask().position.x(810, 1.5))
  );
});
