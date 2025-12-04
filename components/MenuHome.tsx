import { Button } from "./Button"

export const MenuHome = () => {
  return (
    <div
      className="z-10 flex mr-30 gap-8"
    >
      <Button
        className=""
      >
        quem somos
      </Button>
      <Button
        className="w-[107px]"
      >
        projetos
      </Button>
      <Button
        className="w-[136px]"
      >
        campanhas
      </Button>
      <Button
        className="w-[155px]"
      >
        seja voluntário
      </Button>
      <Button
        variant="red"
        className="w-[112px]"
      >
        doe aqui
      </Button>
    </div>
  )
}
