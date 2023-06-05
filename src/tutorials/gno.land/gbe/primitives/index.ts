const markdownContent: string = `

Example using primitives.
Take into account that special types that are not in Go language will be implemented for easy of usage, like bigint.

\`\`\`go
package hello

import (
	"fmt"
	"strings"
)

var b bool

var s string

var (
	i   int
	i8  int8
	i16 int16
	i32 int32
	i64 int64
)

var (
	ui   uint
	ui8  uint8
	ui16 uint16
	ui32 uint32
	ui64 uint64
	// up   uintptr // TODO not supported
)

var (
	by byte // alias for uint8
	r  rune // alias for int32. Represents a Unicode code point.
)

var (
	f32 float32
	f64 float64
)

// TODO not supported
// var (
// 	c64  complex64
// 	c128 complex128
// )

// TODO: not yet implemented: https://github.com/gnolang/gno/pull/764
// var bi bigint

func Render(path string) string {

	out := []string{
		// bool and string
		fmt.Sprintf("%v, %q", b, s),

		// int
		fmt.Sprintf("%d, %d, %d, %d, %d", i, i8, i16, i32, i64),

		// uint
		fmt.Sprintf("%d, %d, %d, %d, %d", ui, ui8, ui16, ui32, ui64 /*, up */),

		// bytes and runes
		fmt.Sprintf("%v, %v", by, r),

		// float
		fmt.Sprintf("%f, %f", f32, f64),

		// complex
		// fmt.Sprintf("%f, %f", c64, c128),
	}

	return strings.Join(out[:], " | ")
}

func SetValues() {
	b = true

	s = "a string"

	i = -42
	i8 = -8
	i16 = -4216
	i32 = -4232
	i64 = -4264

	ui = 42
	ui8 = 8
	ui16 = 4216
	ui32 = 4232
	ui64 = 4264
	// up = 42

	by = byte('A')
	r = rune('A')

	f32 = 42.32
	f64 = 42.64

	// c64 = 42 + 64i
	// c128 = 42 + 128i
}

\`\`\`

We can test these primitives:

\`\`\`go
package hello

import "testing"

func TestPrimitives(t *testing.T) {
	got := Render("")
	expected := "false, \"\" | 0, 0, 0, 0, 0 | 0, 0, 0, 0, 0 | 0, 0 | 0.000000, 0.000000"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}

	SetValues()
	got = Render("")
	expected = "true, \"a string\" | -42, -8, -4216, -4232, -4264 | 42, 8, 4216, 4232, 4264 | 65, 65 | 42.320000, 42.640000"
	if got != expected {
		t.Fatalf("expected %q, got %q.", expected, got)
	}
}

\`\`\`
`;

const title: string = "Primitives";

const section: string = "Section 1";

const tutorialData = {
  content: markdownContent,
  metadata: {
    title,
    section,
  },
};

export default tutorialData;
