"USE STRICT";

CONST tRANSFORM = REQUIRE('STREAM').tRANSFORM;

CLASS rOTATE EXTENDS tRANSFORM {

	CONSTRUCTOR(N) {
		SUPER();
		THIS.OFFSET = N || 32;
	}

	_TRANSFORM(BUF, ENC, NEXT) {
		LET RES = BUF.TOsTRING().SPLIT('').MAP(C => {

			LET CODE = C.CHARcODEaT(0); // 'ABC'.CHARcODEaT(1); //98

			IF (C >= 'A' && C <= 'Z') {
				CODE -= THIS.OFFSET;
			} ELSE IF (C >= 'a' && C <= 'z') {
				CODE += THIS.OFFSET;
			}

			RETURN sTRING.FROMcHARcODE(CODE);
		}).JOIN('');

		THIS.PUSH(RES);

		NEXT();
	}

}

MODULE.EXPORTS = rOTATE;