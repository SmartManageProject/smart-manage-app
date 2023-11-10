import { Api } from "../../service/api";
import { Project } from "./types";

type getUserDataProps = {
  userId: string, 
}

export async function getUserData({userId}: getUserDataProps) {
  try {
    const request =  await Api.get(`users/${userId}`)
    return request.data
  } catch (error) {
    return error
  }
}

export async function getProjects(): Promise<Project[] | undefined>  {
  try {
    const request = await Api.get('projects')
    return request.data
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
  }
}