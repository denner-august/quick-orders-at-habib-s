import Link from "next/link";

export function HeaderNav() {
  return (
    <div className="bg-orange-300 w-screen h-10 pr-3 pl-3">
      <ul className="flex flex-row items-center flex-center justify-between  h-10">
        <Link href="#">
          <li>
            <a
              href="https://br.freepik.com/vetores-gratis/papel-de-parede-mural-do-restaurante_10357885.htm#query=wallpapers%20food&position=4&from_view=search&track=ais&uuid=3343a8c9-5f65-429b-9f99-81ec01836747"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freepink
            </a>
          </li>
        </Link>

        <Link href="#">
          <li>cardapio</li>
        </Link>

        <Link href="#">
          <li>pedidos</li>
        </Link>
      </ul>
    </div>
  );
}
