### Dev

If the modules ever fail, can do a full reset by doing 

```
rm -rf node_modules pnpm-lock.yaml
pnpm install
npx prisma migrate dev --name init
npx prisma generate
```

### Todo

- [x] Fancy font for Taylor and Ryan
- [x] Background cream, writing black
- [x] The gradient below tabs is no longer showing
- [x] Border colors
- [x] Taylor and Ryan isn't centered
- [x] Text input
- [x] spacing on the right (lamp for sure) for in between lg and md and small
- [x] typewriter
- [x] display message popup change color to black
    - [x] anything that says "black", should be "foreground" 
    - [x] for orange-100 secondary secondary as well, should call secondary.
    - [x] remove black and white from all possible
- [x] next js tailwindcss "hsl(var(--primary))" to hexcode
- [x] convert secondary to primary
- [x] convert success to secondary
- [x] photos tab not displaying all pictures on mobile
- [x] picture of the venue using imageslider
- [x] small horizontal scrollbar again after image slider
- [x] bug adding to music recomendations more than once, popup only appears once.
- [x] color scrollbar
- [x] Music rec
    - [x] min height text for 1x2
    - [x] aceternity
- [x] built by the groom pt needs to be adjusted, or absolute bottom of page