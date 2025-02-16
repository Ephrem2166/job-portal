// import { createTheme } from '@mui/material/styles';
import { blue, grey, lightBlue } from "@mui/material/colors";

// export const theme = createTheme({
//     palette: {
//         primary: {
//             main: blue[500]
//         },
//         secondary: {
//             main: lightBlue[800],
//             midNightBlue: "#003366"
//         }
//     }
// });

export const themeColors = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: blue[500],
            white: "#fff",
          },
          secondary: {
            main: lightBlue[800],
            midNightBlue: "#003366",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#003366",
            white: "#003366",
          },
          secondary: {
            main: blue[500],
            midNightBlue: "#2196f3",
          },
          background: {
            default: "#1e1e1e",
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});

// export const themeColors = (mode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           // Palette values for light mode
//           primary: {
//             main: "#4CAF50", // Custom green color
//             white: "#FFFFFF", // Pure white
//           },
//           secondary: {
//             main: "#FF5722", // Custom orange color
//             midNightBlue: "#001F3F", // Dark blue shade
//           },
//         }
//       : {
//           // Palette values for dark mode
//           primary: {
//             main: "#1B5E20", // Dark green
//             white: "#1B5E20", // Dark green
//           },
//           secondary: {
//             main: "#FFC107", // Bright yellow
//             midNightBlue: "#FF7043", // Custom orange shade
//           },
//           background: {
//             default: "#121212", // Darker background for dark mode
//           },
//           text: {
//             primary: "#E0E0E0", // Light gray for text
//             secondary: "#757575", // Medium gray
//           },
//         }),
//   },
// });
