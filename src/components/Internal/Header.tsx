"use client";
import { useTranslation } from "react-i18next";
// 从这行移除了 Github 图标的导入
import { Settings, History, BookText } from "lucide-react";
import { Button } from "@/components/Internal/Button";
import { useGlobalStore } from "@/store/global";

const VERSION = process.env.NEXT_PUBLIC_VERSION;

function Header() {
  const { t } = useTranslation();
  const { setOpenSetting, setOpenHistory, setOpenKnowledge } = useGlobalStore();

  return (
    <>
      <header className="flex justify-between items-center my-6 max-sm:my-4 print:hidden">
        {/* 包裹标题的 <a> 链接标签已被移除 */}
        <h1 className="text-left text-xl font-semibold">
          {t("title")}
          <small className="ml-2 font-normal text-base">v{VERSION}</small>
        </h1>
        <div className="flex">
          {/* GitHub 图标和链接已从这里移除 */}
          <Button
            className="h-8 w-8"
            variant="ghost"
            size="icon"
            title={t("history.title")}
            onClick={() => setOpenHistory(true)}
          >
            <History className="h-5 w-5" />
          </Button>
          <Button
            className="h-8 w-8"
            variant="ghost"
            size="icon"
            title={t("knowledge.title")}
            onClick={() => setOpenKnowledge(true)}
          >
            <BookText />
          </Button>
          <Button
            className="h-8 w-8"
            title={t("setting.title")}
            variant="ghost"
            size="icon"
            onClick={() => setOpenSetting(true)}
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header;
