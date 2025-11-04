// import { DefaultUrlSerializer, UrlTree } from '@angular/router';

// export class PrettyUrlSerializer extends DefaultUrlSerializer {
//
//   // Converts a URL string to a UrlTree (parse)
//   override parse(url: string): UrlTree {
//     // Just reuse default parsing (safe)
//     return super.parse(url);
//   }
//
//   // Converts a UrlTree back into a string (serialize)
//   override serialize(tree: UrlTree): string {
//     const defaultUrl = super.serialize(tree);
//
//     // Remove parentheses and auxiliary syntax for display
//     // ⚠️ Be cautious: this is a simple regex-based clean-up
//     return defaultUrl
//       .replace(/\(.*?\)/g, '') // remove everything in parentheses
//       .replace(/\/\/+/g, '/')  // remove double slashes
//       .replace(/\/$/, '');     // trim trailing slash
//   }
// }

// import { DefaultUrlSerializer, UrlTree } from '@angular/router';
//
// export class PrettyUrlSerializer extends DefaultUrlSerializer {
//
//   override parse(url: string): UrlTree {
//     // Let Angular handle parsing as normal.
//     return super.parse(url);
//   }
//
//   // override serialize(tree: UrlTree): string {
//   //   // Get default Angular URL
//   //   let url = super.serialize(tree);
//   //
//   //   // Example: "/(detail:item/2//sidebar:sidebar)" → ""
//   //   // Example: "/home(detail:item/2//sidebar:sidebar)" → "/home"
//   //   // Keep only the primary path (before '(')
//   //   const parts = url.split('(');
//   //   const primaryPath = parts[0] || '/';
//   //
//   //   // Ensure trailing slash consistency
//   //   return primaryPath.endsWith('/') ? primaryPath.slice(0, -1) : primaryPath;
//   // }
// }

// import { DefaultUrlSerializer, UrlTree, UrlSegmentGroup, UrlSegment } from '@angular/router';
//
// export class PrettyUrlSerializer extends DefaultUrlSerializer {
//
//   override serialize(tree: UrlTree): string {
//     const defaultUrl = super.serialize(tree);
//
//     // Keep primary path (everything before '(') and drop auxiliary outlet segments.
//     const primary = defaultUrl.split('(')[0] || '/';
//
//     // Normalize slashes and trim trailing slash (but keep "/" as-is)
//     let cleaned = primary.replace(/\/\/+/g, '/');
//     if (cleaned !== '/' && cleaned.endsWith('/')) { cleaned = cleaned.slice(0, -1); }
//     return cleaned;
//   }
//
//   override parse(url: string): UrlTree {
//     // If user typed a "pretty" URL like /item/2, convert that into an internal URL
//     // that places the path under the 'detail' auxiliary outlet.
//     // NOTE: This implements a convention: `/item/:id` -> auxiliary `detail:item/:id`.
//     // Modify patterns as needed for your app.
//
//     // Trim trailing slash
//     let normalized = url.replace(/\/+$/, '');
//
//     // If empty or root, just use default parse
//     if (!normalized || normalized === '') { normalized = '/'; }
//
//     // If URL matches /item/{id}, recompose as an auxiliary URL for internal parsing
//     const itemMatch = normalized.match(/^\/item\/(\d+)$/);
//     if (itemMatch) {
//       const id = itemMatch[1];
//       // Build an aux-style URL string so DefaultUrlSerializer can parse it
//       // e.g. "/(detail:item/2)"
//       const auxStyle = `/(detail:item/${id})`;
//       return super.parse(auxStyle);
//     }
//
//     // Otherwise fallback to default behaviour (primary paths etc.)
//     return super.parse(url);
//   }
// }


import { UrlTree ,DefaultUrlSerializer } from '@angular/router';

export class PrettyUrlSerializer extends DefaultUrlSerializer {

  // Converts a URL string to a UrlTree (parse)
  override parse(url: string): UrlTree {
    // Just reuse default parsing (safe)
    return super.parse(url);
  }

  // Converts a UrlTree back into a string (serialize)
  override serialize(tree: UrlTree): string {
    const url = super.serialize(tree)
    console.log(url)
    function cleanUrl(url: string) {
      let splitUrl = url.split('//')
      let result = ''
      splitUrl.reverse().forEach((item, index) => {
        if(index === splitUrl.length - 1){
          result =  item.replace(/\(|\)/g,'').replace(':', '/')
        } else {
          result =  item.replace(/\(|\)/g,'').replace(':', '/') + '/'
        }
      })
      console.log(splitUrl)
      console.log(result)
      return result
    }
    return cleanUrl(url);
  }
}
