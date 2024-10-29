import axios from './axios';

// Obtener todas las máquinas
export const getMaquinasRequest = (page, limit = 8, marca = "") => {
  return axios.get('/api/maquina', {
    params: { page, limit, marca },
  });
};

export const buscarMaquinaPorNumeroDeSerieRequest = async (nroSerieMaquina) => {
  return axios.get(`/api/maquina/serial`, {
    params: { nroSerieMaquina },
  });
};

// Buscar máquina por número de serie flexible (exacta o parcial)
export const buscarMaquinaPorSerieFlexibleRequest = async (nroSerieMaquina, exact = false) => {
  return axios.get(`/api/maquina/buscar/serie-flexible`, {
    params: { nroSerieMaquina, exact },
  });
};

// Obtener todas las máquinas
export const getAllMaquinasRequest = async () =>
  await axios.get("/api/maquina/all");

// Obtener una máquina por su ID
export const getMaquinaRequest = (id) => axios.get(`/api/maquina/${id}`);

export const getMaquinasByCasinoRequest = (nombreCasino) => {
  return axios.get(`/api/maquina/casino`, {
    params: { nombreCasino },
  });
};

// Crear una nueva máquina con datos en formato multipart (para enviar imágenes y otros archivos)
export const createMaquinasRequest = (formData) => {
    return axios.post('/api/maquina', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
};

// Actualizar una máquina (el ID se pasa de manera correcta en la URL)
export const updateMaquinasRequest = (id, maquinaData) => {
  return axios.put(`/api/maquina/${id}`, maquinaData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

// Eliminar una máquina por su ID
export const deleteMaquinasRequest = (id) => axios.delete(`/api/maquina/${id}`);
