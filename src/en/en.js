// BEGIN credit to Damon Oehlman
// https://github.com/DamonOehlman/addressit (accessed: 2018-08-17)
// Copyright (c) 2016 Damon Oehlman damon.oehlman@gmail.com
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
export const street = [
    /ALLE?Y/ui,
    /APP(ROACH)?/ui,
    /ARC(ADE)?/ui,
    /AV(E|ENUE)?/ui,
    /(BOULEVARD|BLVD)/ui,
    /BROW/ui,
    /BYPA(SS)?/ui,
    /C(AUSE)?WAY/ui,
    /(CIRCUIT|CCT)/ui,
    /CIRC(US)?/ui,
    /CL(OSE)?/ui,
    /CO?PSE/ui,
    /(CORNER|CNR)/ui,
    /COVE/ui,
    /(C((OUR)|R)?T|CRT)/ui,
    /CRES(CENT)?/ui,
    /DR(IVE)?/ui,
    /END/ui,
    /ESP(LANANDE)?/ui,
    /FLAT/ui,
    /F(REE)?WAY/ui,
    /(FRONTAGE|FRNT)/ui,
    /(GARDENS|GDNS)/ui,
    /(GLADE|GLD)/ui,
    /GLEN/ui,
    /GR(EE)?N/ui,
    /GR(OVE)?/ui,
    /H(EIGH)?TS/ui,
    /(HIGHWAY|HWY)/ui,
    /(LANE|LN)/ui,
    /LINK/ui,
    /LOOP/ui,
    /MALL/ui,
    /MEWS/ui,
    /(PACKET|PCKT)/ui,
    /P(ARA)?DE/ui,
    /PARK/ui,
    /(PARKWAY|PKWY)/ui,
    /PL(ACE)?/ui,
    /PROM(ENADE)?/ui,
    /RES(ERVE)?/ui,
    /REAL/ui,
    /RI?DGE/ui,
    /RISE/ui,
    /R(OA)?D/ui,
    /ROW/ui,
    /SQ(UARE)?/ui,
    /ST(REET)?/ui,
    /STRI?P/ui,
    /TARN/ui,
    /T(ERRA)?CE|TER?R/ui,
    /(THOROUGHFARE|TFRE)/ui,
    /TRACK?/ui,
    /TR(AI)?L/ui,
    /T(RUNK)?WAY/ui,
    /VIEW/ui,
    /VI?STA/ui,
    /WALK/ui,
    /WA?Y/ui,
    /W(ALK)?WAY/ui,
    /YARD/ui,
    /BROADWAY/ui
  ];
  export const directions = /^(N|NTH|NORTH|E|EST|EAST|S|STH|SOUTH|W|WST|WEST)\$/ui;
  export const unit = /^(#.*|UNIT|APT\.?|APARTMENT)$/ui;
  // END credit to Damon Oehlman