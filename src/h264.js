"use strict";
/*
   Copyright (C) 2012 by Jeremy P. White <jwhite@codeweavers.com>

   This file is part of spice-html5.

   spice-html5 is free software: you can redistribute it and/or modify
   it under the terms of the GNU Lesser General Public License as published by
   the Free Software Foundation, either version 3 of the License, or
   (at your option) any later version.

   spice-html5 is distributed in the hope that it will be useful,
   but WITHOUT ANY WARRANTY; without even the implied warranty of
   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
   GNU Lesser General Public License for more details.

   You should have received a copy of the GNU Lesser General Public License
   along with spice-html5.  If not, see <http://www.gnu.org/licenses/>.
*/

/*----------------------------------------------------------------------------
**  H264 decoder for SPICE
**      This file contains the logic for handling H264 video streams
**--------------------------------------------------------------------------*/

export class H264Decoder {
    constructor() {
        this.decoder = null;
        this.config = {
            codec: 'avc1.42E01E',
            codedWidth: 0,
            codedHeight: 0
        };

        if (!('VideoDecoder' in window)) {
            throw new Error('WebCodecs API is not supported');
        }
    }

    async init(width, height) {
        this.config.codedWidth = width;
        this.config.codedHeight = height;

        this.decoder = new VideoDecoder({
            output: frame => this.handleFrame(frame),
            error: e => console.error(e)
        });

        await this.decoder.configure(this.config);
    }

    async decode(encodedChunk) {
        if (!this.decoder) {
            throw new Error('Decoder not initialized');
        }

        const chunk = new EncodedVideoChunk({
            type: encodedChunk.keyFrame ? 'key' : 'delta',
            timestamp: encodedChunk.timestamp,
            duration: encodedChunk.duration,
            data: encodedChunk.data
        });

        await this.decoder.decode(chunk);
    }

    handleFrame(frame) {
        // Process decoded video frame
        // This will be called with each decoded frame
        const canvas = document.createElement('canvas');
        canvas.width = frame.displayWidth;
        canvas.height = frame.displayHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(frame, 0, 0);
        frame.close();
        return canvas;
    }

    destroy() {
        if (this.decoder) {
            this.decoder.close();
            this.decoder = null;
        }
    }
}