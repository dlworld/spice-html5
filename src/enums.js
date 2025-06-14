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
**  enums.js
**      'constants' for Spice
**--------------------------------------------------------------------------*/
export var Constants = {
  SPICE_MAGIC         : "REDQ",
  SPICE_VERSION_MAJOR : 2,
  SPICE_VERSION_MINOR : 2,

  SPICE_CONNECT_TIMEOUT : (30 * 1000),

  SPICE_COMMON_CAP_PROTOCOL_AUTH_SELECTION : 0,
  SPICE_COMMON_CAP_AUTH_SPICE              : 1,
  SPICE_COMMON_CAP_AUTH_SASL               : 2,
  SPICE_COMMON_CAP_MINI_HEADER             : 3,

  SPICE_TICKET_KEY_PAIR_LENGTH             : 1024,
  SPICE_TICKET_PUBKEY_BYTES                : (1024 / 8 +34), // (SPICE_TICKET_KEY_PAIR_LENGTH / 8 + 34)

  SPICE_LINK_ERR_OK                        : 0,
  SPICE_LINK_ERR_ERROR                     : 1,
  SPICE_LINK_ERR_INVALID_MAGIC             : 2,
  SPICE_LINK_ERR_INVALID_DATA              : 3,
  SPICE_LINK_ERR_VERSION_MISMATCH          : 4,
  SPICE_LINK_ERR_NEED_SECURED              : 5,
  SPICE_LINK_ERR_NEED_UNSECURED            : 6,
  SPICE_LINK_ERR_PERMISSION_DENIED         : 7,
  SPICE_LINK_ERR_BAD_CONNECTION_ID         : 8,
  SPICE_LINK_ERR_CHANNEL_NOT_AVAILABLE     : 9,

  SPICE_MSG_MIGRATE                   : 1,
  SPICE_MSG_MIGRATE_DATA              : 2,
  SPICE_MSG_SET_ACK                   : 3,
  SPICE_MSG_PING                      : 4,
  SPICE_MSG_WAIT_FOR_CHANNELS         : 5,
  SPICE_MSG_DISCONNECTING             : 6,
  SPICE_MSG_NOTIFY                    : 7,
  SPICE_MSG_LIST                      : 8,

  SPICE_MSG_MAIN_MIGRATE_BEGIN        : 101,
  SPICE_MSG_MAIN_MIGRATE_CANCEL       : 102,
  SPICE_MSG_MAIN_INIT                 : 103,
  SPICE_MSG_MAIN_CHANNELS_LIST        : 104,
  SPICE_MSG_MAIN_MOUSE_MODE           : 105,
  SPICE_MSG_MAIN_MULTI_MEDIA_TIME     : 106,
  SPICE_MSG_MAIN_AGENT_CONNECTED      : 107,
  SPICE_MSG_MAIN_AGENT_DISCONNECTED   : 108,
  SPICE_MSG_MAIN_AGENT_DATA           : 109,
  SPICE_MSG_MAIN_AGENT_TOKEN          : 110,
  SPICE_MSG_MAIN_MIGRATE_SWITCH_HOST  : 111,
  SPICE_MSG_MAIN_MIGRATE_END          : 112,
  SPICE_MSG_MAIN_NAME                 : 113,
  SPICE_MSG_MAIN_UUID                 : 114,
  SPICE_MSG_MAIN_AGENT_CONNECTED_TOKENS : 115,
  SPICE_MSG_MAIN_MIGRATE_BEGIN_SEAMLESS : 116,
  SPICE_MSG_MAIN_MIGRATE_DST_SEAMLESS_ACK : 117,
  SPICE_MSG_MAIN_MIGRATE_DST_SEAMLESS_NACK : 118,
  SPICE_MSG_END_MAIN                  : 119,



  SPICE_MSGC_ACK_SYNC                 : 1,
  SPICE_MSGC_ACK                      : 2,
  SPICE_MSGC_PONG                     : 3,
  SPICE_MSGC_MIGRATE_FLUSH_MARK       : 4,
  SPICE_MSGC_MIGRATE_DATA             : 5,
  SPICE_MSGC_DISCONNECTING            : 6,


  SPICE_MSGC_MAIN_CLIENT_INFO         : 101,
  SPICE_MSGC_MAIN_MIGRATE_CONNECTED   : 102,
  SPICE_MSGC_MAIN_MIGRATE_CONNECT_ERROR : 103,
  SPICE_MSGC_MAIN_ATTACH_CHANNELS     : 104,
  SPICE_MSGC_MAIN_MOUSE_MODE_REQUEST  : 105,
  SPICE_MSGC_MAIN_AGENT_START         : 106,
  SPICE_MSGC_MAIN_AGENT_DATA          : 107,
  SPICE_MSGC_MAIN_AGENT_TOKEN         : 108,
  SPICE_MSGC_MAIN_MIGRATE_END         : 109,
  SPICE_MSGC_END_MAIN                 : 110,

  SPICE_MSG_DISPLAY_MODE              : 101,
  SPICE_MSG_DISPLAY_MARK              : 102,
  SPICE_MSG_DISPLAY_RESET             : 103,
  SPICE_MSG_DISPLAY_COPY_BITS         : 104,
  SPICE_MSG_DISPLAY_INVAL_LIST        : 105,
  SPICE_MSG_DISPLAY_INVAL_ALL_PIXMAPS : 106,
  SPICE_MSG_DISPLAY_INVAL_PALETTE     : 107,
  SPICE_MSG_DISPLAY_INVAL_ALL_PALETTES: 108,

  SPICE_MSG_DISPLAY_STREAM_CREATE     : 122,
  SPICE_MSG_DISPLAY_STREAM_DATA       : 123,
  SPICE_MSG_DISPLAY_STREAM_CLIP       : 124,
  SPICE_MSG_DISPLAY_STREAM_DESTROY    : 125,
  SPICE_MSG_DISPLAY_STREAM_DESTROY_ALL: 126,

  SPICE_MSG_DISPLAY_DRAW_FILL         : 302,
  SPICE_MSG_DISPLAY_DRAW_OPAQUE       : 303,
  SPICE_MSG_DISPLAY_DRAW_COPY         : 304,
  SPICE_MSG_DISPLAY_DRAW_BLEND        : 305,
  SPICE_MSG_DISPLAY_DRAW_BLACKNESS    : 306,
  SPICE_MSG_DISPLAY_DRAW_WHITENESS    : 307,
  SPICE_MSG_DISPLAY_DRAW_INVERS       : 308,
  SPICE_MSG_DISPLAY_DRAW_ROP3         : 309,
  SPICE_MSG_DISPLAY_DRAW_STROKE       : 310,
  SPICE_MSG_DISPLAY_DRAW_TEXT         : 311,
  SPICE_MSG_DISPLAY_DRAW_TRANSPARENT  : 312,
  SPICE_MSG_DISPLAY_DRAW_ALPHA_BLEND  : 313,
  SPICE_MSG_DISPLAY_SURFACE_CREATE    : 314,
  SPICE_MSG_DISPLAY_SURFACE_DESTROY   : 315,
  SPICE_MSG_DISPLAY_STREAM_DATA_SIZED : 316,
  SPICE_MSG_DISPLAY_MONITORS_CONFIG   : 317,
  SPICE_MSG_DISPLAY_DRAW_COMPOSITE    : 318,
  SPICE_MSG_DISPLAY_STREAM_ACTIVATE_REPORT : 319,

  SPICE_MSGC_DISPLAY_INIT             : 101,
  SPICE_MSGC_DISPLAY_STREAM_REPORT    : 102,

  SPICE_MSG_INPUTS_INIT               : 101,
  SPICE_MSG_INPUTS_KEY_MODIFIERS      : 102,

  SPICE_MSG_INPUTS_MOUSE_MOTION_ACK   : 111,

  SPICE_MSGC_INPUTS_KEY_DOWN          : 101,
  SPICE_MSGC_INPUTS_KEY_UP            : 102,
  SPICE_MSGC_INPUTS_KEY_MODIFIERS     : 103,

  SPICE_MSGC_INPUTS_MOUSE_MOTION      : 111,
  SPICE_MSGC_INPUTS_MOUSE_POSITION    : 112,
  SPICE_MSGC_INPUTS_MOUSE_PRESS       : 113,
  SPICE_MSGC_INPUTS_MOUSE_RELEASE     : 114,

  SPICE_MSG_CURSOR_INIT               : 101,
  SPICE_MSG_CURSOR_RESET              : 102,
  SPICE_MSG_CURSOR_SET                : 103,
  SPICE_MSG_CURSOR_MOVE               : 104,
  SPICE_MSG_CURSOR_HIDE               : 105,
  SPICE_MSG_CURSOR_TRAIL              : 106,
  SPICE_MSG_CURSOR_INVAL_ONE          : 107,
  SPICE_MSG_CURSOR_INVAL_ALL          : 108,

  SPICE_MSG_PLAYBACK_DATA             : 101,
  SPICE_MSG_PLAYBACK_MODE             : 102,
  SPICE_MSG_PLAYBACK_START            : 103,
  SPICE_MSG_PLAYBACK_STOP             : 104,
  SPICE_MSG_PLAYBACK_VOLUME           : 105,
  SPICE_MSG_PLAYBACK_MUTE             : 106,
  SPICE_MSG_PLAYBACK_LATENCY          : 107,

  SPICE_MSG_SPICEVMC_DATA             : 101,
  SPICE_MSG_PORT_INIT                 : 201,
  SPICE_MSG_PORT_EVENT                : 202,
  SPICE_MSG_END_PORT                  : 203,

  SPICE_MSGC_SPICEVMC_DATA            : 101,
  SPICE_MSGC_PORT_EVENT               : 201,
  SPICE_MSGC_END_PORT                 : 202,

  SPICE_PLAYBACK_CAP_CELT_0_5_1       : 0,
  SPICE_PLAYBACK_CAP_VOLUME           : 1,
  SPICE_PLAYBACK_CAP_LATENCY          : 2,
  SPICE_PLAYBACK_CAP_OPUS             : 3,

  SPICE_MAIN_CAP_SEMI_SEAMLESS_MIGRATE  : 0,
  SPICE_MAIN_CAP_NAME_AND_UUID          : 1,
  SPICE_MAIN_CAP_AGENT_CONNECTED_TOKENS : 2,
  SPICE_MAIN_CAP_SEAMLESS_MIGRATE       : 3,

  SPICE_DISPLAY_CAP_SIZED_STREAM        : 0,
  SPICE_DISPLAY_CAP_MONITORS_CONFIG     : 1,
  SPICE_DISPLAY_CAP_COMPOSITE           : 2,
  SPICE_DISPLAY_CAP_A8_SURFACE          : 3,
  SPICE_DISPLAY_CAP_STREAM_REPORT       : 4,
  SPICE_DISPLAY_CAP_LZ4_COMPRESSION     : 5,
  SPICE_DISPLAY_CAP_PREF_COMPRESSION    : 6,
  SPICE_DISPLAY_CAP_GL_SCANOUT          : 7,
  SPICE_DISPLAY_CAP_MULTI_CODEC         : 8,
  SPICE_DISPLAY_CAP_CODEC_MJPEG         : 9,
  SPICE_DISPLAY_CAP_CODEC_VP8           : 10,
  SPICE_DISPLAY_CAP_CODEC_H264          : 11,

  SPICE_AUDIO_DATA_MODE_INVALID       : 0,
  SPICE_AUDIO_DATA_MODE_RAW           : 1,
  SPICE_AUDIO_DATA_MODE_CELT_0_5_1    : 2,
  SPICE_AUDIO_DATA_MODE_OPUS          : 3,

  SPICE_AUDIO_FMT_INVALID             : 0,
  SPICE_AUDIO_FMT_S16                 : 1,

  SPICE_CHANNEL_MAIN                  : 1,
  SPICE_CHANNEL_DISPLAY               : 2,
  SPICE_CHANNEL_INPUTS                : 3,
  SPICE_CHANNEL_CURSOR                : 4,
  SPICE_CHANNEL_PLAYBACK              : 5,
  SPICE_CHANNEL_RECORD                : 6,
  SPICE_CHANNEL_TUNNEL                : 7,
  SPICE_CHANNEL_SMARTCARD             : 8,
  SPICE_CHANNEL_USBREDIR              : 9,
  SPICE_CHANNEL_PORT                  : 10,
  SPICE_CHANNEL_WEBDAV                : 11,

  SPICE_SURFACE_FLAGS_PRIMARY : (1 << 0),

  SPICE_NOTIFY_SEVERITY_INFO  : 0,
  SPICE_NOTIFY_SEVERITY_WARN  : 1,
  SPICE_NOTIFY_SEVERITY_ERROR : 2,

  SPICE_MOUSE_MODE_SERVER : (1 << 0),
  SPICE_MOUSE_MODE_CLIENT : (1 << 1),
  SPICE_MOUSE_MODE_MASK : 0x3,

  SPICE_CLIP_TYPE_NONE            : 0,
  SPICE_CLIP_TYPE_RECTS           : 1,

  SPICE_IMAGE_TYPE_BITMAP         : 0,
  SPICE_IMAGE_TYPE_QUIC           : 1,
  SPICE_IMAGE_TYPE_RESERVED       : 2,
  SPICE_IMAGE_TYPE_LZ_PLT         : 100,
  SPICE_IMAGE_TYPE_LZ_RGB         : 101,
  SPICE_IMAGE_TYPE_GLZ_RGB        : 102,
  SPICE_IMAGE_TYPE_FROM_CACHE     : 103,
  SPICE_IMAGE_TYPE_SURFACE        : 104,
  SPICE_IMAGE_TYPE_JPEG           : 105,
  SPICE_IMAGE_TYPE_FROM_CACHE_LOSSLESS : 106,
  SPICE_IMAGE_TYPE_ZLIB_GLZ_RGB   : 107,
  SPICE_IMAGE_TYPE_JPEG_ALPHA     : 108,

  SPICE_IMAGE_FLAGS_CACHE_ME : (1 << 0),
  SPICE_IMAGE_FLAGS_HIGH_BITS_SET : (1 << 1),
  SPICE_IMAGE_FLAGS_CACHE_REPLACE_ME : (1 << 2),

  SPICE_BITMAP_FLAGS_PAL_CACHE_ME : (1 << 0),
  SPICE_BITMAP_FLAGS_PAL_FROM_CACHE : (1 << 1),
  SPICE_BITMAP_FLAGS_TOP_DOWN : (1 << 2),
  SPICE_BITMAP_FLAGS_MASK : 0x7,

  SPICE_BITMAP_FMT_INVALID        : 0,
  SPICE_BITMAP_FMT_1BIT_LE        : 1,
  SPICE_BITMAP_FMT_1BIT_BE        : 2,
  SPICE_BITMAP_FMT_4BIT_LE        : 3,
  SPICE_BITMAP_FMT_4BIT_BE        : 4,
  SPICE_BITMAP_FMT_8BIT           : 5,
  SPICE_BITMAP_FMT_16BIT          : 6,
  SPICE_BITMAP_FMT_24BIT          : 7,
  SPICE_BITMAP_FMT_32BIT          : 8,
  SPICE_BITMAP_FMT_RGBA           : 9,


  SPICE_CURSOR_FLAGS_NONE : (1 << 0),
  SPICE_CURSOR_FLAGS_CACHE_ME : (1 << 1),
  SPICE_CURSOR_FLAGS_FROM_CACHE : (1 << 2),
  SPICE_CURSOR_FLAGS_MASK : 0x7,

  SPICE_MOUSE_BUTTON_MASK_LEFT : (1 << 0),
  SPICE_MOUSE_BUTTON_MASK_MIDDLE : (1 << 1),
  SPICE_MOUSE_BUTTON_MASK_RIGHT : (1 << 2),
  SPICE_MOUSE_BUTTON_MASK_MASK : 0x7,

  SPICE_MOUSE_BUTTON_INVALID  : 0,
  SPICE_MOUSE_BUTTON_LEFT     : 1,
  SPICE_MOUSE_BUTTON_MIDDLE   : 2,
  SPICE_MOUSE_BUTTON_RIGHT    : 3,
  SPICE_MOUSE_BUTTON_UP       : 4,
  SPICE_MOUSE_BUTTON_DOWN     : 5,

  SPICE_BRUSH_TYPE_NONE : 0,
  SPICE_BRUSH_TYPE_SOLID : 1,
  SPICE_BRUSH_TYPE_PATTERN : 2,

  SPICE_SURFACE_FMT_INVALID : 0,
  SPICE_SURFACE_FMT_1_A : 1,
  SPICE_SURFACE_FMT_8_A : 8,
  SPICE_SURFACE_FMT_16_555 : 16,
  SPICE_SURFACE_FMT_32_xRGB : 32,
  SPICE_SURFACE_FMT_16_565 : 80,
  SPICE_SURFACE_FMT_32_ARGB : 96,

  SPICE_ROPD_INVERS_SRC : (1 << 0),
  SPICE_ROPD_INVERS_BRUSH : (1 << 1),
  SPICE_ROPD_INVERS_DEST : (1 << 2),
  SPICE_ROPD_OP_PUT : (1 << 3),
  SPICE_ROPD_OP_OR : (1 << 4),
  SPICE_ROPD_OP_AND : (1 << 5),
  SPICE_ROPD_OP_XOR : (1 << 6),
  SPICE_ROPD_OP_BLACKNESS : (1 << 7),
  SPICE_ROPD_OP_WHITENESS : (1 << 8),
  SPICE_ROPD_OP_INVERS : (1 << 9),
  SPICE_ROPD_INVERS_RES : (1 << 10),
  SPICE_ROPD_MASK : 0x7ff,

  LZ_IMAGE_TYPE_INVALID : 0,
  LZ_IMAGE_TYPE_PLT1_LE : 1,
  LZ_IMAGE_TYPE_PLT1_BE : 2,      // PLT stands for palette
  LZ_IMAGE_TYPE_PLT4_LE : 3,
  LZ_IMAGE_TYPE_PLT4_BE : 4,
  LZ_IMAGE_TYPE_PLT8    : 5,
  LZ_IMAGE_TYPE_RGB16   : 6,
  LZ_IMAGE_TYPE_RGB24   : 7,
  LZ_IMAGE_TYPE_RGB32   : 8,
  LZ_IMAGE_TYPE_RGBA    : 9,
  LZ_IMAGE_TYPE_XXXA    : 10,


  SPICE_INPUT_MOTION_ACK_BUNCH : 4,


  SPICE_CURSOR_TYPE_ALPHA     : 0,
  SPICE_CURSOR_TYPE_MONO      : 1,
  SPICE_CURSOR_TYPE_COLOR4    : 2,
  SPICE_CURSOR_TYPE_COLOR8    : 3,
  SPICE_CURSOR_TYPE_COLOR16   : 4,
  SPICE_CURSOR_TYPE_COLOR24   : 5,
  SPICE_CURSOR_TYPE_COLOR32   : 6,

  SPICE_VIDEO_CODEC_TYPE_MJPEG : 1,
  SPICE_VIDEO_CODEC_TYPE_VP8   : 2,
  SPICE_VIDEO_CODEC_TYPE_H264  : 3,

  VD_AGENT_PROTOCOL : 1,
  VD_AGENT_MAX_DATA_SIZE : 2048,

  VD_AGENT_MOUSE_STATE            : 1,
  VD_AGENT_MONITORS_CONFIG        : 2,
  VD_AGENT_REPLY                  : 3,
  VD_AGENT_CLIPBOARD              : 4,
  VD_AGENT_DISPLAY_CONFIG         : 5,
  VD_AGENT_ANNOUNCE_CAPABILITIES  : 6,
  VD_AGENT_CLIPBOARD_GRAB         : 7,
  VD_AGENT_CLIPBOARD_REQUEST      : 8,
  VD_AGENT_CLIPBOARD_RELEASE      : 9,
  VD_AGENT_FILE_XFER_START        :10,
  VD_AGENT_FILE_XFER_STATUS       :11,
  VD_AGENT_FILE_XFER_DATA         :12,
  VD_AGENT_CLIENT_DISCONNECTED    :13,
  VD_AGENT_MAX_CLIPBOARD          :14,

  VD_AGENT_CAP_MOUSE_STATE            : 0,
  VD_AGENT_CAP_MONITORS_CONFIG        : 1,
  VD_AGENT_CAP_REPLY                  : 2,
  VD_AGENT_CAP_CLIPBOARD              : 3,
  VD_AGENT_CAP_DISPLAY_CONFIG         : 4,
  VD_AGENT_CAP_CLIPBOARD_BY_DEMAND    : 5,
  VD_AGENT_CAP_CLIPBOARD_SELECTION    : 6,
  VD_AGENT_CAP_SPARSE_MONITORS_CONFIG : 7,
  VD_AGENT_CAP_GUEST_LINEEND_LF       : 8,
  VD_AGENT_CAP_GUEST_LINEEND_CRLF     : 9,
  VD_AGENT_CAP_MAX_CLIPBOARD          : 10,
  VD_AGENT_END_CAP                    : 11,

  VD_AGENT_FILE_XFER_STATUS_CAN_SEND_DATA : 0,
  VD_AGENT_FILE_XFER_STATUS_CANCELLED     : 1,
  VD_AGENT_FILE_XFER_STATUS_ERROR         : 2,
  VD_AGENT_FILE_XFER_STATUS_SUCCESS       : 3,
};
