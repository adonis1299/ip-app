import { JsonRpcProvider, JsonRpcSigner } from "@ethersproject/providers";
import {
  Web3Data,
} from "../../components/libs/web3-data-provider/Web3Provider";
import { Chains } from "../chains";
import {
  IUSDI,
  IVaultController,
  USDI__factory,
  VaultController__factory,
  OracleMaster__factory,
  IOracleMaster,
  VaultController,
  ICurveMaster,
  CurveMaster__factory,
  ERC20Detailed,
  ERC20Detailed__factory,
} from "../contracts";

export const provider = new JsonRpcProvider(
  'https://eth-ropsten.alchemyapi.io/v2/5EGdI7OUE9ptMFggrLzsM2dDpBYPMujp'
);

export class Rolodex {
  addressUSDI: string;
  USDI: IUSDI;

  addressVC?: string;
  VC?: VaultController;

  addressOracle?: string;
  Oracle?: IOracleMaster;

  addressCurve?: string;
  Curve?: ICurveMaster;

  addressUSDC?: string;
  USDC?: ERC20Detailed;

  constructor(signerOrProvider: JsonRpcSigner | JsonRpcProvider, usdi: string) {
    this.addressUSDI = usdi;
    this.USDI = USDI__factory.connect(this.addressUSDI, signerOrProvider);
  }
}

export const NewRolodex = async (ctx: Web3Data) => {
  if (!ctx.chainId) {
    throw new Error("Must connect to a chain first");
  }
  // *remove or use mainnet 1
  const token = Chains.getInfo(ctx.chainId || 3);
  let rolo: Rolodex;
  // use provider if not connected
  if (!ctx.connected) {
    rolo = new Rolodex(provider!, token.usdiAddress!);
    rolo.addressVC = await rolo.USDI?.getVaultController();
    rolo.VC = VaultController__factory.connect(rolo.addressVC, provider);
  } else {
    console.log('getting signer')
    const signer = ctx.provider?.getSigner(ctx.currentAccount);
    rolo = new Rolodex(signer!, token.usdiAddress!);

    rolo.addressVC = await rolo.USDI?.getVaultController();
    rolo.VC = VaultController__factory.connect(rolo.addressVC!, signer!);
  }
  // connect
  if(!rolo.addressUSDC) {
    rolo.addressUSDC = await rolo.USDI.reserveAddress();
    rolo.USDC = ERC20Detailed__factory.connect(rolo.addressUSDC!, provider!)
  }

  if (!rolo.addressOracle) {
    rolo.addressOracle = await rolo.VC?.getOracleMaster();
    rolo.Oracle = OracleMaster__factory.connect(rolo.addressOracle!, provider!);
  }

  if (!rolo.addressCurve) {
    rolo.addressCurve = await rolo.VC?.getCurveMaster();
    rolo.Curve = CurveMaster__factory.connect(rolo.addressCurve!, provider!);
  }


  console.log(rolo)
  return rolo;
};
