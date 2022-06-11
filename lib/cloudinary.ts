import {v2 as cloudinary}  from "cloudinary";

cloudinary.config({ 
    cloud_name: 'dwf-m7', 
    api_key: '868729874872135', 
    api_secret: 'tgcHmEwg2fXdLxDNKEMGDx9dcCY' 
});
console.log("Hola!, soy cloudinary",cloudinary);

export {
    cloudinary
}