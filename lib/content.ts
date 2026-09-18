export type Content = {
  home: { title:string; subtitle:string; faceButton:string; fingerprintButton:string; footer:string };
  face: { title:string; instruction:string; scanning:string; success:string; close:string; retry:string };
  finger: { title:string; instruction:string; scanning:string; progress:string; success:string; close:string; retry:string };
};
export const KEY='biometric-content';
export const defaultContent: Content = {
  home:{title:'Secure Biometric Verification',subtitle:'Choose a verification method to continue.',faceButton:'Face Detection',fingerprintButton:'Fingerprint Verification',footer:'Your verification is protected.'},
  face:{title:'Face Verification',instruction:'Allow camera access and look at the camera.',scanning:'Detecting face…',success:'Face verification completed.',close:'Close',retry:'Retry'},
  finger:{title:'Fingerprint Verification',instruction:'Follow the five capture steps shown below.',scanning:'Fingerprint scan in progress…',progress:'Capture {current} of {total}',success:'Fingerprint verification completed.',close:'Close',retry:'Retry'}
};
