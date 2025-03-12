const ERRORS = [
    // Errores relacionados con la base de datos
    { code: "235002", type: "db", status: 400, message: "El campo 'titulo' no puede estar vacío" },
    { code: "235003", type: "db", status: 401, message: "El campo 'descripcion' no puede estar vacío" },
    { code: "235004", type: "db", status: 402, message: "El campo 'likes' debe ser un número válido" },
    { code: "235005", type: "db", status: 403, message: "El valor en 'titulo' excede la longitud permitida de 25 caracteres" },
    { code: "235006", type: "db", status: 404, message: "El valor en 'img' excede la longitud permitida de 1000 caracteres" },
    { code: "235007", type: "db", status: 405, message: "El valor en 'descripcion' excede la longitud permitida de 255 caracteres" },
    { code: "235008", type: "db", status: 406, message: "El campo 'likes' no puede ser negativo" },
    
    // Errores del servidor
    { code: "500000", type: "server", status: 407, message: "Error interno del servidor al procesar la solicitud" },
    { code: "500001", type: "server", status: 408, message: "Fallo inesperado en el servidor" },
    { code: "503000", type: "server", status: 409, message: "El servicio no está disponible temporalmente" },
    
    // Errores relacionados con la autenticación
    { code: "401000", type: "auth", status: 410, message: "No tienes permisos para modificar este post" },
    { code: "401001", type: "auth", status: 411, message: "Debes iniciar sesión para realizar esta acción" },
    { code: "403000", type: "auth", status: 412, message: "Acción prohibida para este usuario" },
    
    // Errores de validación
    { code: "422000", type: "validation", status: 413, message: "El título es obligatorio" },
    { code: "422001", type: "validation", status: 414, message: "La imagen debe ser una URL válida" },
    { code: "422002", type: "validation", status: 415, message: "El campo 'likes' solo acepta valores numéricos" },
    
    // Errores de solicitudes incorrectas
    { code: "400000", type: "request", status: 416, message: "Solicitud mal formada" },
    { code: "400001", type: "request", status: 417, message: "Faltan parámetros en la solicitud para crear un post" },
    { code: "400002", type: "request", status: 418, message: "Faltan parámetros en la solicitud para actualizar un post" },
    
    // Errores relacionados con la búsqueda de posts
    { code: "404001", type: "posts", status: 419, message: "Post no encontrado" },
    { code: "404002", type: "posts", status: 420, message: "No se encontraron posts con los criterios especificados" },
    
    // Errores de tiempo de espera
    { code: "408000", type: "server", status: 421, message: "El servidor tardó demasiado en responder" }
  ];
  

  export default ERRORS;