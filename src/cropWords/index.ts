/**
 * Forum has a limited K characters per entry. 
 * Crop a post so that it falls within the limit. 
 *   - Can’t crop part of word.
 *   - Can’t end with a space.
 * Message should be as long as possible given these constraints.
 */

 const cropWords = (entry : string, limit : number) => {
     let pos = 0;
     let cutoff = Math.min(limit + 1, entry.length);

     for (let i=0; i<cutoff; i++) {
         let atTheEnd = i === entry.length - 1;
         if (entry.charAt(i) === ' ' || atTheEnd) {
             pos = atTheEnd ? i + 1 : i;
         }
     }
     return entry.substring(0, pos);
 };
