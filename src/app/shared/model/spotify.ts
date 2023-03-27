export interface followers {
  href: string | null;
  total: number;
}
export interface images {
  url: string;
  height: number | null;
  width: number | null;
}
export interface restrictions {
  reason: string;
}
export interface copyrights {
  text: string;
  type: string;
}
export interface external_urls {
  spotify: string;
}
export interface external_ids {
  isrc: string;
  ean: string;
  upc: string;
}
export interface owner {
  external_urls: [];
  followers: [];
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string | null;
}
export interface tracks {
  href: string;
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  items: [];
}










export interface Artist {
  external_urls: [];
  followers: [];
  genres: [];
  href: string;
  id: string;
  images: [];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface Album {
  album_type: string;
  total_tracks: number;
  available_markets: [string];
  external_urls: [];
  href: string;
  id: string;
  images: [];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: [];
  type: string;
  uri: string;
  copyrights: [];
  external_ids: [];
  genres: [];
  label: string;
  popularity: number;
  artists: [Artist];
  tracks: [Track];
}

export interface Track{
  Album: [];
  album_group: string;
  Artist: [];
  available_markets: [string];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: [];
  external_urls: [];
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: [];
  restrictions: [];
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

export interface Playlist {
  collaborative: boolean;
  description: string | null;
  external_urls: [];
  followers: [];
  href: string;
  id: string;
  images: [];
  name: string;
  owner: [];
  public: boolean;
  snapshot_id: string;
  tracks: [tracks];
  type: string;
  uri: string;
}




export interface device {
  id: string | null;
  is_active: boolean;
  is_private_session: boolean;
  is_restricted: boolean;
  name: string;
  type: string;
  volume_percent: number | null;
}
export interface context {
  type: string;
  href: string;
  external_urls: [];
  uri: string;
}
export interface item {
  TrackObject: [];
  EpisodeObject: [];
}
export interface actions {
  interrupting_playback: boolean;
  pausing: boolean;
  resuming: boolean;
  seeking: boolean;
  skipping_next: boolean;
  skipping_prev: boolean;
  toggling_repeat_context: boolean;
  toggling_shuffle: boolean;
  toggling_repeat_track: boolean;
  transferring_playback: boolean;
}


export interface Player {
  device: [];
  repeat_state: string;
  shuffle_state: boolean;
  context: [];
  timestamp: number;
  progress_ms: number;
  is_playing: boolean;
  item: [];
  currently_playing_type: string;
  actions: [];
}


