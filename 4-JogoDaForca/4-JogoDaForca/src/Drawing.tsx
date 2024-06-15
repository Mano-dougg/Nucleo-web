const head = (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "-30px",
      }}
    />
  );
  const body = (
    <div
      style={{
        width: "10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: "0",
      }}
    />
  );
  const right_arm = (
    <div
      style={{
        height: "10px",
        width: "90px",
        background: "black",
        position: "absolute",
        top: "130px",
        right: "0",
        borderRadius: "5px",
      }}
    />
  );
  const left_arm = (
    <div
      style={{
        height: "10px",
        width: "90px",
        background: "black",
        position: "absolute",
        top: "130px",
        right: "-80px",
        borderRadius: "5px",
      }}
    />
  );
  const left_leg = (
    <div
      style={{
        height: "10px",
        width: "100px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "-1px",
        borderRadius: "5px",
        rotate: "-60deg",
        transformOrigin: "right bottom",
      }}
    />
  );
  const right_leg = (
    <div
      style={{
        height: "10px",
        width: "100px",
        background: "black",
        position: "absolute",
        top: "210px",
        right: "-89px",
        borderRadius: "5px",
        rotate: "60deg",
        transformOrigin: "left bottom",
      }}
    />
  );
  
  const body_parts = [head, body, left_arm, right_arm, left_leg, right_leg];
  
  type DrawingProps = {
    numberOfGuesses: number;
  };
  
  export function Drawing({ numberOfGuesses }: DrawingProps) {
    return (
      <div
        style={{
          position: "relative",
        }}
      >
        {body_parts.slice(0, numberOfGuesses)}
        <div
          style={{
            height: "50px",
            width: "10px",
            background: "black",
            position: "absolute",
            right: "0",
            top: "0",
          }}
        />
        <div
          style={{
            height: "10px",
            width: "200px",
            background: "black",
            marginLeft: "120px",
          }}
        />
        <div
          style={{
            height: "400px",
            width: "10px",
            background: "black",
            marginLeft: "120px",
          }}
        />
        <div
          style={{
            height: "10px",
            width: "250px",
            background: "black",
            position: "absolute",
            left: 0,
            bottom: 0,
          }}
        />
      </div>
    );
  }
  